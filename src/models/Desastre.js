const mongoose = require('../database/connection');


desastres = {
    'assalto a bancos' : {
        min : 1,
        max : 3,
    },
    'monstros gigantes' : {
        min : 2,
        max : 5,
    },
    'desastres naturais' : {
        min : 3,
        max : 6,
    }
}

const DesastreSchema = new mongoose.Schema({
    name : {
        type : String,
        enum: Object.keys(desastres),
        lowercase: true,
        required: true
    }
})


var DesastreModel = mongoose.model('Desastres',DesastreSchema);



module.exports = {DesastreSchema,DesastreModel,desastres};