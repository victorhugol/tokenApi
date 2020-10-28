const mongoose = require("../database/connection");
const {Schema} = mongoose;


const EventoSchema = new Schema({
    descricao : {
        type : String,
        required : true,
    },
    dataInicio : {
        type : String,
        required : true,
    },
    dataFim : {
        type : String,
        required : true,
    },
    horarioInicio : {
        type : String,
        required : true,
    },
    horarioFim : {
        type: String,
        required :true,
    }
});

const EventoModel = mongoose.model('Evento',EventoSchema);


module.exports = EventoModel;