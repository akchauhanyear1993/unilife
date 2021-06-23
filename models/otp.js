var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var otpSchema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
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
      required: true,
      default: "no"
    },
    created_date: {
        type: String,
        required: true
        
      }
    

  }, { collection: 'otp_verify' });
  
  module.exports = mongoose.model('Otp', otpSchema);
  