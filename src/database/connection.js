const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/heroes';



mongoose.connect(url,{useNewUrlParser: true
    , useUnifiedTopology: true
    , useCreateIndex: true});


mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Deu bom chapa!");
});



module.exports = mongoose;
