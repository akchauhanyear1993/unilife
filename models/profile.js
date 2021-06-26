var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  snapchat: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String,
    required: true
  },
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_social_profile' });

module.exports = mongoose.model('Profile', profileSchema);
