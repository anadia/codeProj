var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')


var obj = {};
router.get('/', function (req, res, next) {

  connection.query('SELECT * FROM studata JOIN subject on studata.id = subject.id_student', function (err, result) {

    if (err) {
      throw err;
    } else {
      obj = { students: result };
      res.render('students', obj);
    }
  });

});

router.post('/', function (req, res) {
  // console.log(req.body);

  let name = req.body.name;
  let lastname = req.body.lastname;
  let eyescolor = req.body.eyescolor;
  let nationality = req.body.nationality;
  let age = req.body.age;
  let name_subject = req.body.name_subject;
  console.log(req.body.name_subject)



  let sql = "INSERT INTO studata set? ";
  let sql2 = "INSERT INTO subject set? ";

  connection.query(sql, { name, lastname, eyescolor, nationality, age }, (error, students) => {
    console.log(students.insertId);
    let id_student = students.insertId;

    connection.query(sql2, { name_subject, id_student }, (err, subjects) => {

      res.redirect('/');
    })
  });

});




router.get('/students/delete/:id', function (req, res) {

  let id = req.params.id;

  connection.query("DELETE  FROM subject WHERE  id_student = " + id, function (err, result) {

      connection.query("DELETE  FROM studata WHERE  id = " + id, function (err, result) {
          res.redirect('/')
        })
    });
});

router.get('/students/edit/:id', function (req, res) {

  let id = req.params.id;

  connection.query("SELECT * FROM studata WHERE id = ?", [id], (err, results) => {


    connection.query('SELECT * FROM  subject WHERE id_student = ?', [id], (error, resultsubject) => {
      // console.log(resultsubject)
      res.render('studentEdit', {
        results: results[0],
        resultsubject: resultsubject[0]
      });

    })
  }); //pintamos en la vista individual 

});

  router.post("/update/:id", function (req, res) {
    let id = req.params.id;
    let name = req.body.name;
    let lastname = req.body.lastname;
    let eyescolor = req.body.eyescolor;
    let nationality = req.body.nationality;
    let age = req.body.age;
    let name_subject = req.body.name_subject;
    console.log(req.body);

    let sql = "UPDATE INTO subject set? WHERE id_student" + id;

    connection.query('UPDATE studata set? WHERE id = ' + id, { name, lastname, eyescolor, nationality, age }, 
    (err, result) => {
      connection.query('UPDATE subject set? WHERE id_student = ' + id, { name_subject },
        (err, results) => {

          res.redirect('/');
        })
    })
  });



  module.exports = router;
