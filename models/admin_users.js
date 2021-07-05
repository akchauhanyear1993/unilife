var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var admin_usersSchema = new Schema({
    
    username : {
        type: String,
        required : true
    },
    password_show: {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : false

    },
    email : {
        type : String,
        required : false

    },
    active : {
        type : Number,
        required : false,
        default : 1

    },
    group_id : {
        type : Number,
        required : false,
        default : 0

    },
    first_name : {
        type : String,
        required : false

    },
    last_name : {
        type : String,
        required : false

    },
    phone : {
        type : String,
        required : false

    },
    logo : {
        type : String,
        required : false

    },
    social : {
        type : String,
        required : false

    },
    language : {
        type : String,
        required : false

    },
    source : {
        type : String,
        required : false

    },
    own_refere_id : {
        type : String,
        required : false

    },
    refer_count : {
        type : String,
        required : false

    },
    invite_code : {
        type : String,
        required : false

    },
    token : {
        type : String,
        required : false

    },
    fcm_no : {
        type : String,
        required : false

    },
    created_on : {
        type : String,
        required : false

    },
    type : {
        type : String,
        required : false

    },
    activation_code : {
        type : String,
        required : false

    },
    ip_address : {
        type : String,
        required : false

    },
    forgotten_password_time : {
        type : String,
        required : false

    },
    remember_code : {
        type : String,
        required : false

    },
    slug : {
        type : String,
        required : false

    },
    forgotten_password_code : {
        type : String,
        required : false

    },
    salt : {
        type : String,
        required : false

    },
    last_login : {
        type : String,
        required : false

    },
    coupon_code : {
        type : String,
        required : false

    },
    otp_verify : {
        type : String,
        required : false,
        default : "no"

    }

    }, { collection: 'admin_users' });
    
module.exports = mongoose.model('Admin_users', admin_usersSchema);
  