var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var languageSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  language_name: {
    type: String,
    required: true
  },
 
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_languages' });

module.exports = mongoose.model('Language', languageSchema);
