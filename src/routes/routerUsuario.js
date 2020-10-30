const express = require("express");
const { UsuarioModel } = require("../models/Usuario");
const routerUsuario = express.Router();
routerUsuario.use(express.json());


routerUsuario.post('/cadastro',async (req,res)=>{
    try{
        console.log(req.body);

        const user = await UsuarioModel
        .find({usuario : req.body.usuario},(err,res)=>{
            console.log(err);
        });
        console.log(user.length);
        if(user.length == 0){
            await UsuarioModel.create(req.body);
            return res.status(200).send({ok : "Usuario Cadastrado"});
        }
        else{
            return res.status(400).send({fail:'Usuario ja existe!'});
        }

    }catch(err){
        return res.status(400).send({erro : err});
    }
});

routerUsuario.post('/login',async (req,res)=>{
    try{
        const user = await UsuarioModel
        .find(req.body,(err,res)=>{
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