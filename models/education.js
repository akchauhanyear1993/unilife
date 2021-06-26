var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var educationSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  college_name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default : ""
  },
  concentration: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  club_society: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
   start_date: {
    type: String,
    required: true
  },
   end_date: {
    type: String,
    required: true
  },
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_education' });

module.exports = mongoose.model('Education', educationSchema);
