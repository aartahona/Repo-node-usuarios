const express = require('express');
const bodyParser = require('body-parser');
const  dotEnv=require('dotenv');
const nodemon=require('nodemon');

dotEnv.config()


const app=express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/usuarios/', function(req,res){
    app.res(200).send('Lista de Usuarios');
});

app.get('/usuarios/:id', function(req,res){
    app.res(200).send('')
});