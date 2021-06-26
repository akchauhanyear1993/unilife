var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var degreeSchema = new Schema({
    
   university_name: {
      type: String,
      required: true
    }    

  }, { collection: 'degree_tbl' });
  
  module.exports = mongoose.model('Degree', degreeSchema);
  