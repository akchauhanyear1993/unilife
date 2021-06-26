var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillsSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  skill_name: {
    type: String,
    required: true
  },
 
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_skills' });

module.exports = mongoose.model('Skills', skillsSchema);
