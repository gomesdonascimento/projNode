var express = require('express');

var app = express();

app.get('/',function(req,res){

    res.send('Hello from express!')
});

//rota com parâmetro
app.get('/hello/:name', function(req,res){

    res.json({
        message:'Essa é minha rota com parametro ' + req.params.name
    })
});


app.get('/hello', function(req,res){

    res.json({
        message:'Essa é minha rota olá!'
    })
});

app.listen(3000,function(){

    console.log('express has been started');
});