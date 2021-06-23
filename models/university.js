var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var universitychema = new Schema({
    
   
    university_name: {
      type: String,
      required: true
    }    

  }, { collection: 'university_tbl' });
  
  module.exports = mongoose.model('University', universitychema);
  