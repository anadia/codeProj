var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shop', h2: 'Best Sales Today' });
});

module.exports = router;
