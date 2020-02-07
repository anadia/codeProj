var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
/*   res.send('respond with a resource'); */
  res.render('users', { 
    name: 'Oscar', 
    lastname: 'Terres',
    email: 'oterres@gmail.com',
    phone: '633322222',
    title: 'Formulary',
    color: 'azul'
  
  });
});

module.exports = router;
