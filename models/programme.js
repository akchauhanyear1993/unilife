var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var programmeSchema = new Schema({
    
   
    programe_name: {
      type: String,
      required: true
    }    

  }, { collection: 'programme_tbl' });
  
  module.exports = mongoose.model('Programme', programmeSchema);
  