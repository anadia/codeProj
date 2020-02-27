var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dashboard', { title: 'Codifica - Panel Control' });
});
module.exports = router;
