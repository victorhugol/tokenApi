const mongoose = require('../database/connection');
const crypto = require('crypto');
const {Schema} = mongoose;


const UsuarioSchema = new Schema({
    nome : {
        type : String,
        required : true,
    },
    senha : {
        type: String,
        required : true,
    }
});


// UsuarioSchema.pre('save',function(){
    
//     this.nomeReal = crypto.createHmac('sha256', this.nomeReal)
//                    .update('tokenLab')
//                    .digest('hex');
// })



const UsuarioModel = mongoose.model('Usuario',UsuarioSchema);

module.exports = {UsuarioModel}; 