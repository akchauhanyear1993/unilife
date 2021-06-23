var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var yearsSchema = new Schema({
    
   
    years_name: {
      type: Number,
      required: true
    }    

  }, { collection: 'years_tbl' });
  
  module.exports = mongoose.model('Years', yearsSchema);
  