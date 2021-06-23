var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  
  phone: {
    type: String,
    required: false,

  },
  user_type: {
      type: Number,
      required: true,
      default:0
  },
  is_online: {
    type: String,
    required: true,
    default: "offline"
  },
  username: {
    type: String,
    required: false
    
    },
    complete_profile: {
        type: String,
        required: true,
        default: "no"
    },
    profile_image: {
        type: String,
        required: false,
        default : ""
        
    },
    profile_status: {
        type: String,
        required: true,
        default: "public"
    },

    university_school_id: {
        type: Number,
        required: true
       
    },
    university_school_email: {
        type: String,
        required: true
       
    },
    email_domain: {
        type: String,
        required: false,
        default : ""
       
    },
    status: {
        type: String,
        required: false,
        default: "active"
       
    },
    password: {
        type: String,
        required: true
       
    },
    decoded_password: {
        type: String,
        required: true
       
    },
    reset_password: {
        type: String,
        required: false,
        default: ""
       
    },
    remember_token: {
        type: String,
        required: false,
        default: ""
       
    },
    otp: {
        type: String,
        required: false,
        default :"yes"
       
    },
    otp_verify: {
        type: String,
        required: true,
        default: "yes"
       
    },

    designation: {
        type: String,
        required: false
       
       
    },
    organisation: {
        type: String,
        required: false
        
       
    },
    personal_mission: {
        type: String,
        required: false
       
    },
    personal_description: {
        type: String,
        required: false
       
    },
    profile_banner_image: {
        type: String,
        required: false
       
    },
    date_of_birth: {
        type: String,
        required: false
       
    },
    gender: {
        type: String,
        required: false
       
    },
    created_at: {
        type: String,
        required: false
       
    },
    updated_at: {
        type: String,
        required: false
       
    },
    source: {
        type: String,
        required: false
       
    },
    version: {
        type: String,
        required: false,
        default : ""
       
    }

}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);
