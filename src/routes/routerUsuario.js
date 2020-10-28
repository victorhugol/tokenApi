const express = require("express");
const { UsuarioModel } = require("../models/Cadastro");
const routerUsuario = express.Router();
routerUsuario.use(express.json());


routerUsuario.post('/cadastro',async (req,res)=>{
    try{
        console.log(req);
        await UsuarioModel.create(req.body);
        return res.status(200).send({ok:'Usuario Cadastrado'});
    }catch(err){
        return res.status(400).send({erro : err});
    }
});


routerUsuario.post('/login',async (req,res)=>{
    try{
        const user = await UsuarioModel
        .find({nome : req.body.nome, senha : req.body.senha},(err,res)=>{
            console.log(res);
        });
        if(user.length == 0){
            return res.status(404).send({erro : "Usuario Não Encontrado"});
        }else{
            return res.status(200).send({ok:'Usuario Encontrado'});
        }
    }catch(err){
        return res.status(400).send({erro : err});
    }
});




module.exports = routerUsuario;