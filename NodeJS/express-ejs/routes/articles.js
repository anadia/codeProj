var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')


var obj2 = {};
router.get('/', function(req, res){

    connection.query('SELECT * FROM article', function(err, result2) {

        if(err){
            throw err;
        } else {
            obj2 = {articles: result2};
            res.render('articles', obj2);                
        }
    });

});
module.exports = router;