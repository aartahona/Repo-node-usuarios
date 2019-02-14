const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router=require("./router");

dotenv.config();

const app=express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res){
    res.status(200).send('Hola Acamica');
});

app.use('/', router);

module.exports = app;
