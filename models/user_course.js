var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_courseSchema = new Schema({
    
  user_id : {
    type: String,
    required : true
  },
  name: {
      type: String,
      required: true
    } ,
  created_at : {
  	type : String,
  	required : false

  }
  }, { collection: 'user_course' });
  
  module.exports = mongoose.model('User_course', user_courseSchema);
  