const express = require('express');


const router = express.Router();
//dotenv.config();




router.get('/usuarios/', function(req,res){
    res.status(200).send('Lista de Usuarios');
});

router.get('/usuarios/:id', function(req,res){
    res.status(200).send('Lista de Usuarios por Id');
});

router.post('/usuarios/', function(req,res){
    res.status(200).send('Agregar un nuevo usuario');
});
router.put('/usuarios/:id', function(req,res){
    res.status(200).send('Modificar un usuario por Id');
});
router.delete('/usuarios/:id', function(req,res){
    res.status(200).send('Eliminar un usuario por Id');
});

module.exports = router;