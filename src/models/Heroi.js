const mongoose = require('../database/connection');
const {desastres} = require('./Desastre');
const crypto = require('crypto');



const HeroiSchema = new mongoose.Schema({
    nomeReal : {
        type : String,
        required : true
    },
    codinome : {
        type : String,
        required : true,
        unique : true
    },

    desastres : {
        type : [String],
        required : true
    },

    cidade : {
        type: [String],
        required : true,

    },

    trabalhoEmEquipe : {
        type : String,
        required : true,
        set : function(value){
            if(value == ""){
                return "indiferente";
            }else{
                return value
            }
        },
        lowercase : true
    },
    disponivel : {
        type : Boolean,
        default : true
    }
    
})




HeroiSchema.pre('save',function(){
    
    this.nomeReal = crypto.createHmac('sha256', this.nomeReal)
                   .update('sflabs')
                   .digest('hex');
})



const HeroiModel = mongoose.model('Heroi',HeroiSchema);

module.exports = { HeroiModel, HeroiSchema }; 