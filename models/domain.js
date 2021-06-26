var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var domainSchema = new Schema({
    
   
    university_id: {
      type: String,
      required: true
    },
    domain: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true,
        default : "active"
      },
      created_at : {
        type: String,
        required: false,
        default : ""

      },
      updated_at : {
        type: String,
        required: false,
        default : ""

      }

  }, { collection: 'domains' });
  
  module.exports = mongoose.model('Domain', domainSchema);
  