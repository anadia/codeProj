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
router.post('/', function(req,res){
let name = req.body.name;
let color = req.body.color;
let price =req.body.price;


let sql2 = "INSERT INTO article set? ";
connection.query(sql2, {name,color, price}, (err, result)=>{
    if (err){
      throw err;
    }
    res.redirect('/articles');
  });
});

router.get('/delete/:article_id', function (req, res) {
    console.log(req.params.article_id)
    let article_id = req.params.article_id;
    connection.query("DELETE  FROM article WHERE  article_id = " + article_id,
      function (err, result) {
        res.redirect('/articles')
      })
  })
module.exports = router;