var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: false,
    
  },
  phone: {
    type: String,
    required: false
  },
  user_type: {
      type: String,
      required: true,
      default:0
  },
  is_online: {
    type: String,
    required: true,
    default: "online"
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
        required: false
        
    },
    profile_status: {
        type: String,
        required: true,
        default: "public"
    },

    university_school_id: {
        type: Number,
        required: false
       
    },
    university_school_email: {
        type: String,
        required: false
       
    },
    email_domain: {
        type: String,
        required: false
       
    },
    status: {
        type: String,
        required: false,
        default: "active"
       
    },
    password: {
        type: String,
        required: false
       
    },
    decoded_password: {
        type: String,
        required: false
       
    },
    reset_password: {
        type: String,
        required: false
       
    },
    remember_token: {
        type: String,
        required: false
       
    },
    otp: {
        type: String,
        required: false
       
    },
    otp_verify: {
        type: String,
        required: true,
        default: "no"
       
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
        type: Date,
        required: false
       
    },
    updated_at: {
        type: Date,
        required: false
       
    },
    source: {
        type: String,
        required: false
       
    },
    version: {
        type: String,
        required: false
       
    }

}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);
