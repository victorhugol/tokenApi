const mongoose = require('../database/connection');
const {cidades} = require('./Cidade');
const {desastres} = require('./Desastre');
const {HeroiModel} = require('./Heroi');

const AnuncioSchema = new mongoose.Schema({
    desastre : {
        type : String,
        enum : Object.keys(desastres),
        required : true
    },
    cidade : {
        type : String,
        enum : cidades,
        required : true
    },
    herois : [String]
})




AnuncioSchema.pre('save', async function(){
    console.log(this.cidade)
    var herois = await HeroiModel.find({});
    this.herois = herois;
})

const AnuncioModel = new mongoose.model('Anuncio',AnuncioSchema);

module.exports = AnuncioModel;