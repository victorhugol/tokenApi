const mongoose = require('../database/connection');
const {Schema} = mongoose;


const EventoSchema = new Schema({
    titulo : {
        type : String,
        required : true,
    },
    descricao : {
        type : String,
        required : true,
    },
    comeco : {
        dia : Number,
        mes: Number,
        ano : Number
    }

});




const EventoModel = mongoose.model('Evento',EventoSchema);

module.exports = {EventoModel, EventoSchema}; 