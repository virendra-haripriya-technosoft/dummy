var express = require('express')

var app  = express() ;

app.get('/', function (req, res){
    res.send("Hello world!");
});

app.get('/user/:user', function(req, res){
    res.send('page for user' + req.params.user);
});

app.listen(3000);
console.log('server listening on port 3000! ');