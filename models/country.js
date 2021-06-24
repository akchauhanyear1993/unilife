var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
   country_name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    short_name:{
      type: String,
      required: true
    }
  }, { collection: 'countries_tbl' });
  
  module.exports = mongoose.model('Country', countrySchema);
  