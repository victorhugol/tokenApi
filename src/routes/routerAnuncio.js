const express = require("express");
const routerAnuncio = express.Router();
const AnuncioModel = require('../models/Anuncio');
routerAnuncio.use(express.json());



//  rpta que publica os anuncios
routerAnuncio.post('/registrar/anuncio', async function (req,res){
    try{
        var anuncio = await AnuncioModel.create(req.body);
        return res.send({res : anuncio});
    }catch(err){
        return res.status(400).send({res : err})
    }
})

//  rota que lista os anuncios
routerAnuncio.get('/anuncio', async function (req,res){
    try{
        var anuncio = await AnuncioModel.find({});
        return res.send({res : anuncio});
    }catch(err){
        return res.status(404).send({res : err})
    }
})



module.exports = routerAnuncio;