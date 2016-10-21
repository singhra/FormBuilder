const config = require('config');
var aws4 = require('aws4');
const Promise = require('axios');

const requestHelper = {
   getAssetAccessToken: () => {
    const clientId = config.get('adproduct.assetClientId');
    const clientSecret = config.get('adproduct.assetClientSecret');
    var authString = new Buffer(clientId + ':' + clientSecret).toString('base64');
    var url = config.get('adproduct.baseAssetUrl') + config.get('adproduct.assetManagementUrls.oAuthUrl');
    var options = {
      method: 'POST',
      url: url,
      headers: {
        'Authorization': 'Basic ' + authString,
        'Content-Type': 'application/json'
      }
    }
    return Promise(options)
  },
  getAssetResource: (accessToken, requestType) => {
    var accessToken = accessToken;
    var url = config.get('adproduct.baseAssetUrl') + config.get('adproduct.assetManagementUrls.' + requestType) + accessToken;
    var options = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return Promise(options)
  },
  awsSign(request){
    var awsAccessKeyId=config.get('adproduct.awsAccessKeyId'),
      awsSecretAccessKey=config.get('adproduct.awsSecretAccessKey');
    request.region = config.get('adproduct.baseRegion');
    request.service = config.get('adproduct.baseService');
    return aws4.sign(request, {
      accessKeyId: awsAccessKeyId,
      secretAccessKey: awsSecretAccessKey
    });
  },
  appendHeaders(request){
    request.headers = request.headers || {};
    request.headers["Content-Type"] = "application/json";
  },
  internalApi(request, serverResult){
    if(!request.method){
      request.method='POST';
    }
    request.path = request.url
    this.appendHeaders(request)
    console.log('request',request)
    return Promise(request)
    .then((apiResponse) => {
      if (apiResponse.data.errors) {
        var error = apiResponse.data.errors;
        console.log('api error response: ', error);
        serverResult.status(400).json({ error })
      } else {
        serverResult.status(200).json(apiResponse.data);
      }
    }).catch((error) => {
      console.log('api error response: ', error);
      serverResult.status(400).json({ error });
    });
  },
  externalApi(request, serverResult){
    if(!request.method){
      request.method='POST';
    }
    request.path = request.url
    this.appendHeaders(request)
    var signedRequest = this.awsSign(request);
    console.log('request',request)
    return Promise(signedRequest)
    .then((apiResponse) => {
      if (apiResponse.data.errors) {
        var error = apiResponse.data.errors;
        console.log('api error response: ', error);
        serverResult.status(400).json({ error })
      } else {
        serverResult.status(200).json(apiResponse.data);
      }
    }).catch((error) => {
      console.log('api error response: ', error);
      serverResult.status(400).json({ error });
    });
   }
};

module.exports = requestHelper;
