var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var interestSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  
  interest_name: {
    type: String,
    required: true
  },
  created_at : {
     type: String,
    required: false

  }
 
}, { collection: 'user_interest' });

module.exports = mongoose.model('Interest', interestSchema);
