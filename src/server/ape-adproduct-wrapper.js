const Promise = require('axios');
const _ = require('lodash');
const config = require('config');
const requestHelper = require('./ape-request-helper');

// method used in init resource
var formatInitResults = (responses, taskList) => {
	var initResults = {};
	for (var i = 0; i < taskList.length; i++) {
		if (!responses[i].data.error) {
			initResults[taskList[i]] = responses[i].data.data;
		} else {
			initResults[taskList[i]] = [];
		}
	}
	return initResults;
}
// mapping between endpoints exposed in the ui and backend endpoints
var getRelativeUrl = (req) => {
	if(req.url.indexOf('create') > -1){

		var relativePath = config.get('adproduct.paths.create')
		return relativePath

	} else if(req.url.indexOf('save') > -1){

		var relativePath = config.get('adproduct.paths.save')
		return relativePath.replace('<guid>',req.params['guid'])

	} else if(req.url.indexOf('publish') > -1){

		var relativePath = config.get('adproduct.paths.publish')
		return relativePath.replace('<guid>',req.params['guid'])

	} else if(req.url.indexOf('search') > -1){

		var relativePath = config.get('adproduct.paths.search')
		return relativePath

	} else if(req.url.indexOf('get') > -1){

		var relativePath = config.get('adproduct.paths.get')
		return relativePath.replace('<guid>',req.params['guid'])

	} else if(req.url.indexOf('fileUpload') > -1){

		var relativePath = config.get('adproduct.paths.fileUpload')
		return relativePath

	} else if(req.url.indexOf('result') > -1){

		var relativePath = config.get('adproduct.paths.getPollResult')
		return relativePath.replace('<guid>',req.params['guid'])

	} else if(req.url.indexOf('submit') > -1){

		var relativePath = config.get('adproduct.paths.submitPollResult')
		return relativePath.replace('<guid>',req.params['guid'])

	} else {
		return ''
	}

}

const adProductWrapper = {
	getInitResources: (req, res) => {
		var taskList = req.body.taskList;
			requestHelper.getAssetAccessToken()
			.then(function (response) {
				var accessToken = response.data.data.access_token;
				var ops = [];
				_.forEach(taskList, function (task) {
					ops.push(requestHelper.getAssetResource(accessToken, task));
				});
				Promise.all(ops)
					.then((responses) => {
						var initResults = formatInitResults(responses, taskList);
						res.status(200).json({ initResults });
					}).catch((err) => {
						console.error(err);
						res.status(400).json({ err });
					});
			}).catch(function (e) {console.error(e); res.status(500).json({ err });
			});
	},
  internalApi(serverReq, serverRes){
  	var baseURL = config.get('adproduct.baseInternalUrl')
  	var basePath = config.get('adproduct.baseInternalPath')
  	var relativeUrl = getRelativeUrl(serverReq)
  	var host = config.get('adproduct.internalHost')
  	var request = {
  		url : baseURL + basePath + relativeUrl,
  		baseUrl : baseURL,
  		host : host,
  		method : serverReq.method
  	}

  	if(serverReq.method === 'POST' || serverReq.method === 'PUT'){
  		request.data = serverReq.body;
  	}
  	requestHelper.internalApi(request, serverRes);
  },
  externalApi(serverReq, serverRes){
  	var baseURL = config.get('adproduct.baseExternalUrl')
  	var basePath = config.get('adproduct.baseExternalPath')
  	var relativeUrl = getRelativeUrl(serverReq)
  	var host = config.get('adproduct.externalHost')
  	var request = {
  		url : basePath + relativeUrl,
  		baseURL : baseURL,
  		host : host,
  		method: serverReq.method
  	}
  	if(serverReq.method === 'POST' || serverReq.method === 'PUT'){
  		request.body = JSON.stringify(serverReq.body);
  		request.data = JSON.stringify(serverReq.body);
  	}
  	requestHelper.externalApi(request, serverRes);
  }
};

module.exports = adProductWrapper;

