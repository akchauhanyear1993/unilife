var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var otpSchema = new Schema({
    
    otp: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    verify: {
      type: String,
      required: false,
      default: "no"
    },
    created_date: {
        type: String,
        required: false,
        default: ""

        
      }
    

  }, { collection: 'otp_verify' });
  
  module.exports = mongoose.model('Otp', otpSchema);
  