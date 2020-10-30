const express = require("express");
const { EventoModel } = require("../models/Eventos");
const { UsuarioModel } = require("../models/Usuario");

const routerEventos = express.Router();
routerEventos.use(express.json());


routerEventos.post('/cadastroEvento',async (req,res)=>{
    try{
        // console.log(req.body);
        // await EventoModel.create(req.body);
        const [usuario] = await UsuarioModel.find(req.query);
        console.log(usuario);
        usuario.eventos.push(req.body);
        const usuarioAtualizado = await UsuarioModel
        .findOneAndUpdate(req.query,usuario);


        return res.status(200).send(usuarioAtualizado);
    }catch(err){
        console.log('erro');
        return res.status(400).send({erro : err});
    }
})

routerEventos.get('/listEventos',async (req,res)=>{
    try{
        console.log(req.query);
        const [lista] = await UsuarioModel.find(req.query);
        return res.status(200).send(lista.eventos);
    }catch(err){
        console.log('erro');
        return res.status(400).send({erro : err});
    }
})




module.exports = routerEventos;