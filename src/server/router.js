var router = require('express').Router();
var adProductWrapper = require('./ape-adproduct-wrapper');
const requestHelper = require('./ape-request-helper');
const basicAuthN = require('./ape-basic-auth');

/*
 * Entry point for React-based SPA
 */
router.get('/', function(req, res) {
    res.render('index');
});

/*
 * Authorization-FREE APIs
 */

router.get('/api/:guid/result', adProductWrapper.externalApi);
router.post('/api/:guid/submit', adProductWrapper.externalApi);

/*
 * Authorization enabled APIs
 */
router.post('/adproduct-init',basicAuthN.authorize, adProductWrapper.getInitResources);
router.post('/adproduct-create', basicAuthN.authorize, adProductWrapper.internalApi);
router.get('/adproduct-get/:guid',basicAuthN.authorize, adProductWrapper.internalApi);
router.put('/adproduct-save/:guid',basicAuthN.authorize, adProductWrapper.internalApi);
router.patch('/adproduct-publish/:guid',basicAuthN.authorize, adProductWrapper.internalApi);
router.post('/adproduct-fileUpload',basicAuthN.authorize, adProductWrapper.internalApi);
router.post('/adproduct-search',basicAuthN.authorize, adProductWrapper.internalApi);

module.exports = router;
