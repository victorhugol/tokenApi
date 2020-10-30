const mongoose = require('../database/connection');
const {EventoSchema} = require('../models/Eventos');
const {Schema} = mongoose;


const UsuarioSchema = new Schema({
    usuario : {
        type : String,
        required : true,
    },
    eventos : [EventoSchema]

});




const UsuarioModel = mongoose.model('Usuario',UsuarioSchema);

module.exports = {UsuarioModel}; 