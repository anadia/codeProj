var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
var multer = require('multer');




router.get('/', function (req, res, next) {

  connection.query('SELECT * FROM user ', (err, data) => {
    if (err) {
      throw err;
    } else {
      // console.log(data)
      res.render('users', { data: data })
    }
  })
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/avatars')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({ storage: storage });

router.post('/', upload.single('avatar'), function (req, res, next) {

  console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let user = req.body.user;
  let password = req.body.password;
  let avatar = req.file.originalname;

  connection.query('INSERT INTO user set? ', { name, email, user, password ,avatar}, (err, data) => {
        res.redirect('/users');
      });
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
