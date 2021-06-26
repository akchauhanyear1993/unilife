var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
    
  user_id : {
    type: String,
    required : true
  },
  type: {
      type: String,
      required: true
    } ,
  device_id : {
  	type : String,
  	required : true

  },
  device_token : {
  	type : String,
  	required : true

  },
  created_at : {
  	type : String,
  	required : false

  },
  updated_at : {
  	type : String,
  	required : false
    
  }

  }, { collection: 'user_device' });
  
  module.exports = mongoose.model('User_device', deviceSchema);
  