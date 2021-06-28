var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  
  user_type: {
    type: String,
    required: true

  },
  // university_name: {
  //   type: String,
  //   required: false,

  // },
  is_online : {
    type: String,
    required: true,
    default : "online"

  },
  degree: {
    type: String,
    required: true

  },
  programme_name: {
    type: String,
    required: true

  },
  current_year: {
    type: String,
    required: false

  },
  otp_verify : {
    type: String,
    required: false
    
    

  },
  designation : {
    type: String,
    required: false,
    default: ""

  },
  organisation : {
    type: String,
    required: false,
    default: ""

  },
  personal_mission : {
    type: String,
    required: false,
    default: ""

  },
  personal_description : {
    type: String,
    required: false,
    default: ""
  },
  profile_banner_image : {
    type: String,
    required: false,
    default: ""

  },
  date_of_birth : {
    type : String,
    required : false,
    default : ""
  },
  gender : {
    type: String,
    required: false,
    default: ""

  },
  
  university_school_email: {
      type: String,
      required: false,
      default: ""
  },
  email_domain : {
    type: String,
    required: false,
    default: ""

  },

  email :{
    type : String,
    required : true
  },
  referral_Code: {
    type: String,
    required: false,
    default: ""
  },
  refered_by: {
    type: String,
    required: false,
    default: ""
  },
  interest : {
    type: String,
    required: false,
    default: ""
  },

  name: {
    type: String,
    required: false
    },
  phone: {
        type: String,
        required: false,
        default: ""
        
    },
  
  parent_email: {
        type: String,
        required: false,
        default: "public"
    },
    profile_status : {
      type: String,
        required: false,
        default: ""
    },
    status : {
      type: String,
      required: false,
      default: "active"

    },
  university_school_id : {
      type: String,
      required: false,
      default: ""

  },

  
  username : {
    type: String,
    required : false,
    default : ""

  },
  ielts : {
    type : String,
    required : false

  },
  complete_profile : {
    type : String ,
    required : false,
    default : ""
  },
  profile_image : {
    type : String ,
    required : false,
    default : ""
  },

  country: {
        type: String,
        required: false,
        default : ""
       
    },
    password: {
        type: String,
        required: false,
        default : ""
    },
    decoded_password : {
      type: String,
        required: false,
        default : ""
    },
    reset_password : {
      type: String,
      required: false,
      default : ""

    },
    remember_token : {
      type: String,
      required: false,
      default : ""

    },

    created_at : {
      type: String,
      required: false,
      default: ""
    }, 
    updated_at : {
      type: String,
      required: false,
      default: ""
    },
    source : {
      type: String,
      required: false,
      default: ""
  
    },
    version : {
      type: Number,
      required: false,
      default: 2.0
  
    }


}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);

