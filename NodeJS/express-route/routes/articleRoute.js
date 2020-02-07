const express = require('express');
const router = express.Router();
const path = require('path');




router.get("/", function(req, res) {
    console.log(path.join(__dirname, '/../articulo.html'));
    res.sendFile(path.join(__dirname, '/../articulo.html'));
    //res.render('index');
   });

   router.post('/',function(req,res){
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.descripcion);
    console.log(req.body.precio);
    res.send('ok');
});


router.get("/:id", function(req, res) {
    console.log(req.params);
    res.send('Ok2');
   });

module.exports = router; 