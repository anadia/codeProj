var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')


var obj = {};
router.get('/', function(req, res,next){

    connection.query('SELECT * FROM studata', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {students: result};
            res.render('students', obj);                
        }
    });

});

router.post('/', function(req,res){
  // console.log(req.body);

  let name= req.body.name;
  let lastname = req.body.lastname;
  let eyescolor =req.body.eyescolor;
  let nationality= req.body.nationality;
  let age = req.body.age;


  let sql2 = "INSERT INTO studata set? ";

  connection.query(sql2, {name,lastname, eyescolor, nationality,age}, (err, result)=>{
    if (err){
      throw err;
    }
    res.redirect('/');
  });

});


router.get('/students/delete/:id', function (req, res) {

  let id = req.params.id;

  connection.query("DELETE  FROM studata WHERE  id = " + id,
    function (err, result) {
      res.redirect('/')
    })
})

/* router.get('/students/edit/:id', function(req,res){

  let id = req.params.id;

  connection.query("SELECT * FROM studata WHERE id = ?",[id], (err, results) =>{

    res.render('studentEdit',{results:results[0]});

  })
}); //pintamos en la vista individual */

router.get('students/edit/:id', (req, res) => {

  let id = req.params.id;
  connection.query("SELECT * FROM studata  WHERE id = ?", [id], (err, results_students) => {
    console.log(results_students[0]);
    let select_studata = results_students[0].id;
    connection.query('SELECT * FROM subjects WHERE id_student = ?', [select_studata], (error, results_subject) =>{
      res.render('studentEdit',{
        results_students: results_students[0],
        results_subject: results_subject[0]
      })
    }) 
});
})

router.post("/update/:id", function(req,res){
  let id = req.params.id;
  let name = req.body.name;
  let lastname = req.body.lastname;
  let eyescolor = req.body.eyescolor;
  let nationality = req.body.nationality;
  let age = req.body.age;

  connection.query('UPDATE studata set? WHERE id = ' + id, {name,lastname,eyescolor,nationality,age} ,(err, result)=>{
    res.redirect('/');
  })
});






module.exports = router;
