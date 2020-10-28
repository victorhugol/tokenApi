const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/calendario';



mongoose.connect(url,{useNewUrlParser: true
    , useUnifiedTopology: true
    , useCreateIndex: true});

mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _=>{
  console.log("Banco de Dados Funcionando!");
  }
);



module.exports = mongoose;
