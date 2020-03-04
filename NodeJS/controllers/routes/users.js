var express = require('express');
var router = express.Router();
let fruitController = require('../controllers/indexController.js')

/* GET users listing. */
router.get('/', fruitController.listFruits);

module.exports = router;
