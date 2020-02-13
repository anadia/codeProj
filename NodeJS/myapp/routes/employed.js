var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
var multer = require('multer'); //instalamos la libreria y hyacemos el require creamos variable storage

var storage = multer.diskStorage({
  destination: function (req, file, cb) { //recibe dos parametros el fichero y destino
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({ storage: storage })

/* router.post('/', upload.single('myfile'), function (req, res, next) { //se añade variable de entorno upload puede ser single un archivo o para varios

  let img = req.file.originalname;
  // console.log(req.file.originalname);


  connection.query("INSERT INTO `employed` (img) VALUES ('" + img + "')", 
   (error, employeds) => {

    res.redirect('/employed')
  });

}); */



router.get('/', function (req, res, next) {

  let sql = 'SELECT * FROM employed';
  connection.query(sql, (error, employeds) => {

    res.render('employed', { employeds: employeds })
    // res.send('ok')
    console.log(employeds);
  });

});
router.post('/', function (req, res, next) {

  console.log(req.body)
  let name = req.body.name;
  let lastname = req.body.lastname;
  let year = req.body.year;
  let email = req.body.email;
  let password = req.body.password;
  let name_job = req.body.name_job;
  let salary = req.body.salary;

  let sql = "INSERT INTO employed set? ";
  let sql2 = "INSERT INTO job set? ";

  connection.query(sql, { name, lastname, year, email, password }, (error, employeds) => {
    console.log(employeds.insertId); //se crea automaticamente en la base de datos porque es autoincrement
    let id_employed = employeds.insertId;

    connection.query(sql2, { name_job, salary, id_employed }, (err, jobs) => {
      res.redirect('/employed');
    })
  });

});

router.get('/delete/:id', (req, res) => {
  // console.log(req.params.id)
  let id = req.params.id;
  connection.query("DELETE  FROM job WHERE  id_employed = " + id,
    function (err, result) {
      connection.query("DELETE  FROM   employed WHERE  id = " + id,
        function (err, result) {
          res.redirect('/employed')
          // res.send('eliminado')
        })
    })
})

router.get('/edit/:id', (req, res) => {

  let id = req.params.id;
  connection.query("SELECT * FROM employed  WHERE id = ?", [id], (err, resultsemployed) => {
    let id_trabajador = resultsemployed[0].id;
    connection.query('SELECT * FROM job WHERE id_employed = ?', [id_trabajador], (error, resultsjob) => {
      res.render('employedIndividual', {
        resultsemployed: resultsemployed[0],
        resultsjob: resultsjob[0]
      })
    })
  });
})


router.post('/update/:id', function (req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let lastname = req.body.lastname;
  let year = req.body.year;
  let email = req.body.email;
  let password = req.body.password;
  let name_job = req.body.name_job;
  let salary = req.body.salary;


  connection.query("UPDATE employed set?  WHERE id =" + id, { name, lastname, year, email, password }, (err, results) => {

    connection.query("UPDATE job set? WHERE id_employed =" + id, { name_job, salary }, (err, resultjobs) => {
      // res.send('ok');
      res.send('ok');
    })
  })

});

module.exports = router;
