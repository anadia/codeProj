var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')


/* router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM user', (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render('users', { data: data });
    }
    console.log(data[0].name);
  })
}); */
//    <%= data[0].user.id %> 

var obj = {};
router.get('/', function(req, res){

    connection.query('SELECT * FROM user', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {users: result};
            res.render('users', obj);                
        }
    });

});


router.post('/', function(req,res){
  console.log(req.body);
  let name= req.body;
  let lastname = req.body.lastname;
  let telephone =req.body.phone;
  let email= req.body.email;
   let sql="INSERT INTO `user`(`name`,`lastname`,`email`,`phone`) VALUES ('"+name+","+lastname"');

  res.redirect('/users');
});
    connection.query(sql,(err, result) => {
      if (err) {
        throw err;
      }
      res.redirect('/users');
    });

  // res.redirect('/users');

module.exports = router;
