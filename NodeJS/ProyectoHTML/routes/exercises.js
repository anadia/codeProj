var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');




router.get('/', function (req, res, next) {

    connection.query('SELECT * FROM exercise ', (err, data) => {
        if (err) {
            throw err;
        } else {
            // console.log(data)
            res.render('exercises', { data: data })
        }
    })
});

router.get('/create/:id', function (req, res, next) {
    let id_create= req.params.id;

    connection.query('SELECT * FROM exercise WHERE exercise_id = ' + id_create, (err, data) => {
        // console.log(data[0])
        res.render('createExercise' ,{ data: data[0],
        });
    });
});



router.post('/create/:id', function (req, res) {
    let exercise_id= req.params.id
    let content = req.body.content;

    connection.query('INSERT INTO exercise set? ', {content}, (err, data) => {
        let exercise_id = data.insertId;

    })


});


router.get('/delete/:id', function (req, res) {

    let id = req.params.id;
    console.log(req.params)
    connection.query("DELETE  FROM exercise WHERE  exercise_id = " + id,
        function (err, result) {
            res.redirect('/exercises');
        });
});

router.get('/edit/:id', function (req, res) {
    let id = req.params.id;

    connection.query("SELECT * FROM exercise WHERE exercise_id = ?", [id], (err, results) => {
        res.render('exercises', {results: results[0]});
    });
});



router.post('/update/:id', function (req, res) {
    let id = req.params.id;
    let content = req.body.content;


    connection.query('UPDATE exercise set? WHERE exercise_id = ' + id, { content }, (err, results) => {
        res.redirect('/exercises')
    })

})




module.exports = router;