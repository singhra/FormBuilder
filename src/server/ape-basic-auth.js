var basicAuth = require('basic-auth');
const config = require('config');

exports.authorize = function (request, response, next) {
  /* TODO. Take log generation logic from UGC
   * const logWrapper = require('./ape-logger-wrapper');
   * logWrapper.info("ape-basic-auth", "authorize", "Authorizing API.");
   */
  function unauthorized(response) {
    response.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return response.sendStatus(401);
  };
  var user = basicAuth(request);
  var correctBase64Username = config.get('api.auth.user');
  var correctBase64Password = config.get('api.auth.pass');

  if (!user || !user.name || !user.pass) {
    return unauthorized(response);
  };

  if (correctBase64Username === new Buffer(user.name).toString('base64')
    && correctBase64Password === new Buffer(user.pass).toString('base64')) {
    return next();
  } else {
    return unauthorized(response);
  };
}
