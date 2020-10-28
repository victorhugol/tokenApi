const mongoose = require('../database/connection');


const cidades = [
    "new york",
    "rio de janeiro",
    "toquio"
]

const CidadeSchema = new mongoose.Schema({
    name : {
        type : String,
        enum : cidades,
        lowercase : true,
        required : true   
    }
})



var CidadeModel = mongoose.model('Cidades',CidadeSchema);



module.exports = {CidadeSchema,CidadeModel,cidades};