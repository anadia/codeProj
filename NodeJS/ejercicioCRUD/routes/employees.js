var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')


var obj = {};
router.get('/', function(req, res,next){

    connection.query('SELECT * FROM employee', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {employees: result};
            res.render('employees', obj);                
        }
    });

});

router.post('/', function(req,res){
  console.log(req.body);

  let name= req.body.name;
  let lastname = req.body.lastname;
  let year =req.body.year;
  let email= req.body.email;
  let password = req.body.password;


  let sql2 = "INSERT INTO employee set? ";

  connection.query(sql2, {name,lastname, year, email,password}, (err, result)=>{
    if (err){
      throw err;
    }
    res.redirect('/');
  });

});


router.get('/employees/delete/:employee_id', function (req, res) {
  console.log(req.params.employee_id)
  let employee_id = req.params.employee_id;

  connection.query("DELETE  FROM employee WHERE  employee_id = " + employee_id,
    function (err, result) {
      res.redirect('/')
    })
})

router.get('/employees/edit/:employee_id', function(req,res){

  let employee_id = req.params.employee_id;

  connection.query("SELECT * FROM employee WHERE employee_id = ?",[employee_id], (err, results) =>{

    res.render('employees',{results:results[0]});
    console.log(results);
  })
});

router.post("/employees/update/:employee_id", function(req,res){
  let employee_id = req.params.employee_id;
  let name = req.body.name;
  let lastname = req.body.lastname;
  let year = req.body.year;
  let email = req.body.email;
  let password = req.body.password;

  connection.query('UPDATE employee set? WHERE employee_id = ' + employee_id, {name,lastname,year,email,password} ,(err, results)=>{
    res.redirect('/');
  })
});






module.exports = router;
