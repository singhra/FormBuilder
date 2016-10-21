'use strict';

var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan')
var webpackDevUtils = require('./webpack.utils.dev.js');


global.root_require = function root_require(name) {
  return require(path.join(__dirname, name));
};

//var compiler = webpack(webpack_config);
var express = require('express');

//var config = require('config');
var router = root_require('src/server/router');
//var log = require('./src/server/lib/bunyan-logger');
var app = express();


/*
 * Section start: Webpack configuration
 */
// we only want hot reloading in development
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging' ) {
    webpackDevUtils.useWebpackMiddleware(app);
} else {
    //Production & Staging middleware if any
}
/*
 * Section end: Webpack configuration
 */


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/static', express.static(__dirname + '/Public'));

morgan.token('istDate', function(req, res) {
  return new Date();
});
app.use(morgan('dev'));

app.use(bodyParser.json({
  limit: '15mb'
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '15mb',
  parameterLimit: '20000'
}));

app.use('/', router);

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Sorry! Something broke"
  });
});

let portNo = process.env.PORT || 8080;
app.listen(portNo, function() {
  console.log("Started HTTP server on port", portNo);
});

