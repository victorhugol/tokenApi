const express = require('express');
const routerUsuario = require('./routes/routerUsuario');
const routerEventos = require('./routes/routerEventos');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use(routerUsuario);

app.use(routerEventos);


const PORT = process.env.PORT || 8000

app.listen(PORT,res=>{
    console.log('Api funcionando!');
});