var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  
  usertype: {
    type: String,
    required: false,

  },
  university_name: {
    type: String,
    required: false,

  },
  degree: {
    type: String,
    required: false,

  },
  programme_name: {
    type: String,
    required: false,

  },
  current_year: {
    type: String,
    required: false,

  },
  university_email: {
      type: String,
      required: true
  },
  referral_Code: {
    type: String,
    required: true,
    default: "offline"
  },
  name: {
    type: String,
    required: false
    
    },
  phone: {
        type: String,
        required: true,
        default: "no"
    },
  email: {
        type: String,
        required: false,
        default : ""
        
    },
  parent_email: {
        type: String,
        required: true,
        default: "public"
    },

  country: {
        type: String,
        required: true
       
    },
  created_on: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    }

}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);
