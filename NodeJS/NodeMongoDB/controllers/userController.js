// requerimos el modelo en el contralador
const User= require ('../models/user');

//creamos un objeto vacio
const controller={};

//creamos un nuevo metodo con la busqueda de todos los usuarios
controller.getUsers = (req, res) => {
    User.find({}, (err, results)=>{
        res.send("Búsqueda de todos los usuarios");
        console.log(results)
    })
};

///busqueda de usuario por ID

controller.getUserById = (req,res)=>{
    let idUser = req.params.idUser;
    User.findById(idUser, (err,result) =>{
        res.send("Búsqueda de Usuario por ID");
        console.log( result);
    });

};

//Guardar Usuario
controller.saveUser = (req,res)=>{
    let user = new User();

    user.name = req.body.name;
    user.surname = req.body.surname;
    user.coloreyes = req.body.coloreyes;
    user.age = req.body.age;
    user.dni = req.body.dni;

user.save((err,result)=>{
    res.send("Usuario guardado");
    console.log(result);
});

};

//eliminar usuario

controller.deleteUser = (req,res)=>{
    let idUser= req.params.idUser;
console.log(idUser)
    User.findById(idUser, (err,result)=>{
        console.log(result);
        result.remove( err => {
            res.send('Usuario eliminado');
        });
    })
};

controller.updateUser = (req,res)=>{
    let idUser= req.params.idUser;
    let update = req.body;
    User.findByIdAndUpdate(idUser, update, (err,result) =>{
        res.send("Actualizado");
        console.log(result);
    })
};
//exportamos ese objeto cont todos sus metods
module.exports = controller;
