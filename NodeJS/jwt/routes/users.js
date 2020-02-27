var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');
let key = "secret";



router.get('/', function (req, res, next) {

  connection.query('SELECT * FROM user ', (err, data) => {
    if (err) {
      throw err;
    } else {
      // console.log(data)
      res.render('login')
    }
  })
});

router.post('/', function (req, res, next) {
  let name = sha1(req.body.name);
  let lastname = sha1(req.body.lastname);
  let password = sha1(req.body.password);
let sql = "INSERT INTO user set?";
connection.query(sql,{name, lastname, password}, (err,results)=>{
  res.send('insert ok');
})

});

router.post('/login', (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let password = req.body.password;
  connection.query(`SELECT * FROM user WHERE name = '${name}' AND password = sha1('${password}');`
      , function (err, results) {

/*    console.log(results);
        res.send('ok el select');*/
const token =jwt.sign({
  name, password
},
    key
);
res.send({token}) // la respuesta es el token
      })
});


router.get('/delete/:id', function (req, res) {

  let id = req.params.id;
  console.log(req.params)
  connection.query("DELETE  FROM user WHERE  user_id = " + id,
      function (err, result) {
        res.redirect('/users');
      });
});


router.get('/edit/:id', function (req, res) {
  let id = req.params.id;

  connection.query("SELECT * FROM user WHERE user_id = ?", [id], (err, results) => {
    let user_id = results[0].id;
    res.render('user', {
      results: results[0]
    })
  })
});


router.post('/update/:id', function (req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let email = req.body.email;
  let user = req.body.user;
  let password = req.body.password;
  let avatar = req.body.avatar;
  console.log("aaaaa");
  connection.query('UPDATE user set? WHERE user_id = ' + id, { name, email, user, password, avatar }, (err, results) => {
    res.redirect('/users')
  })

});

router.get('/create/:id', function (req, res) {
  res.render('createExercise')
});

module.exports = router;
