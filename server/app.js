const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


dotenv.config();

const app=express();
console.log(process.env.PORT)
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.get('/usuarios/', function(req,res){
    res.status(200).send('Lista de Usuarios');
});

app.get('/usuarios/:id', function(req,res){
    res.status(200).send('Lista de Usuarios por Id');
});

app.post('/usuarios/', function(req,res){
    res.status(200).send('Agregar un nuevo usuario');
});
app.put('/usuarios/:id', function(req,res){
    res.status(200).send('Modificar un usuario por Id');
});
app.delete('/usuarios/:id', function(req,res){
    res.status(200).send('Eliminar un usuario por Id');
});

module.exports = app;
