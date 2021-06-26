var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var university_schoolsSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  
  dean_name: {
    type: String,
    required: true
  },
  
  no_of_students: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default : "active"
  },
  
  created_at : {
     type: String,
    required: false

  },
  updated_at : {
     type: String,
    required: false

  }
 
}, { collection: 'university_schools' });

module.exports = mongoose.model('Highlights', university_schoolsSchema);
