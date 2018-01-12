var express = require('express');
var router = express.Router();
var cors = require('cors')
var cust = require('./../controllers/customercontroller');


/* GET users listing. */
router.get('/:businessCountry',cors(), cust.get_details);
router.get('/',cors(),cust.get_harris_details);

module.exports = router;
