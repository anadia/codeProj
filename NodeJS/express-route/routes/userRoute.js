const express = require('express');
const router = express.Router();
const path = require('path');




router.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname, '/../index.html'));
    //res.render('index');
   });


router.post('/',function(req,res){
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.apellidos);
    res.send('ok');
});


    module.exports = router; 