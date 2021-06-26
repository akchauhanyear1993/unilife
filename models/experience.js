var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var experienceSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  company_name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default : ""
  },
  emp_type: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false
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
 
}, { collection: 'user_experience' });

module.exports = mongoose.model('Exerience', experienceSchema);
