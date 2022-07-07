var express = require('express');
var router = express.Router();
var TestingController = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', TestingController.testingGet);
router.post('/login', TestingController.testingLoginFirebaseAuth);
router.post('/register', TestingController.registerFirebase)

module.exports = router;
