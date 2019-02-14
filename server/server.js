const express = require('express');
var app = require('./app');
var port = app.get('port');



app.use(function(err, req, res, next){
    if(err){
        res.status(500).send('Ooops, ha ocurrido un error');
    }
});

app.listen(port, function(){
    console.log("Running application on port...... "+ port);
})