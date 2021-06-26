var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_achievementsSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  certificate_name: {
    type: String,
    required: true
  },
  offered_by: {
    type: String,
    required: true
  },
  offered_date: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_achievements' });

module.exports = mongoose.model('Achievement', user_achievementsSchema);
