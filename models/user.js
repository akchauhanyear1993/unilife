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
  is_online : {
    type: String,
    required: false,
    default : "online"

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
  otp_verify : {
    type: String,
    required: true,
    unique: "yes"

  },
  university_school_email: {
      type: String,
      required: true,
      unique: true,
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
        default: "no",
        unique: true
    },
  email: {
        type: String,
        required: false,
        default : "",
        unique: true,
        
    },
  parent_email: {
        type: String,
        required: true,
        default: "public"
    },
    profile_status : {
      type: String,
        required: false,
        default: ""
    },
    university_school_id : {
      type: Number,
        required: false,
        default: "0"

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
