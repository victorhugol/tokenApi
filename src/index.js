const express = require('express');
const routerUsuario = require('./routes/routerUsuario');
const app = express();


app.use(express.json());

app.use(routerUsuario);




const PORT = process.env.PORT || 8000

app.listen(PORT,res=>{
    console.log('Api funcionando!');
});