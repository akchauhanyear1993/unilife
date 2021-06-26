var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var highlightsSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  currently_working: {
    type: String,
    required: true
  },
  
  currently_studying: {
    type: String,
    required: true
  },
  graduated_from: {
    type: String,
    required: true
  },
  complete_highschool_at: {
    type: String,
    required: true
  },
  lives_in: {
    type: String,
    required: false
  },
   from: {
    type: String,
    required: true
  },
   personal_information: {
    type: String,
    required: true
  },
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_highlights' });

module.exports = mongoose.model('Highlights', highlightsSchema);
