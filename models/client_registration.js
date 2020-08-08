 
var mongoose = require('mongoose');
var clientRegistration = new mongoose.Schema({

  name: { type:String},
  last: { type:String},
  email : { type:String , required:true , index:{unique:true}},
  password : { type:Number, required:true },
  date:{ type:Date , default:Date.now}
  
});
module.exports = mongoose.model('clientRegistration', clientRegistration);
