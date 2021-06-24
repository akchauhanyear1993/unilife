var express = require('express');
var mongoose = require('mongoose');
var Item = require('./models/item');
var User = require('./models/user');
var nodemailer = require('nodemailer');
const University = require('./models/university');
const Degree = require('./models/degree');
const Country = require('./models/country');
const Programme = require('./models/programme');
const Years = require('./models/years');




var transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user: 'amreshkumar.com@gmail.com',
      pass: 'amresh@051993'
    }
});
const port = process.env.port || 5000
var app = express();

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb+srv://dubai_students_93:dubai_students_93@unilife.jxohc.mongodb.net/new_dubai_students_93?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
promise.then(function(db) {
  
    console.log("Connected to database!!!");
}, function(err){
    console.log("Error in connecting database " + err);
});



app.listen(port, function () {
  // app.get('port')
  console.log('Listening on port ' + port);
});
app.use(express.json());



//*********************   unilife new Api Starts here ***********************//


//*********** University list *************************//

app.get('/university-list',(req,res)=>{

	University.find()
    .then((data) => {
      let userdata = data;
      if(userdata.length > 0) {

        res.send({
          status: true,
          message: "university list",
          data: userdata,
        });
      } else {
        res.send({
          status: false,
          message: "data not found",
          data: [],
        });
      }
  
    })
    .catch((e) => {
      res.send(e);
    });
  
  
});
app.get('/degree-list',(req,res)=>{

	Degree.find()
    .then((data) => {
      let userdata = data;
      if(userdata.length > 0) {

        res.send({
          status: true,
          message: "university list",
          data: userdata,
        });
      } else {
        res.send({
          status: false,
          message: "data not found",
          data: [],
        });
      }
  
    })
    .catch((e) => {
      res.send(e);
    });
  
  
});
app.get('/year-list',(req,res)=>{

	Years.find()
    .then((data) => {
      let userdata = data;
      if(userdata.length > 0) {

        res.send({
          status: true,
          message: "Years list",
          data: userdata,
        });
      } else {
        res.send({
          status: false,
          message: "data not found",
          data: [],
        });
      }
  
    })
    .catch((e) => {
      res.send(e);
    });
  
  
});
app.get('/programme-list',(req,res)=>{

	Programme.find()
    .then((data) => {
      let userdata = data;
      if(userdata.length > 0) {

        res.send({
          status: true,
          message: "Programme list",
          data: userdata,
        });
      } else {
        res.send({
          status: false,
          message: "data not found",
          data: [],
        });
      }
  
    })
    .catch((e) => {
      res.send(e);
    });
  
  
});
app.get('/country-list',(req,res)=>{

	Country.find()
    .then((data) => {
      let userdata = data;
      if(userdata.length > 0) {

        res.send({
          status: true,
          message: "Country list",
          data: userdata,
        });
      } else {
        res.send({
          status: false,
          message: "data not found",
          data: [],
        });
      }
  
    })
    .catch((e) => {
      res.send(e);
    });
  
  
});
app.post('/signup-user',(req,res)=>{
	    const otp = new User(req.body);
      otp.save(function(err, user) {
        if (err == null) return res.send({
          status: true,
          message: "Otp sent to mobile!",
          data: user,
        });
        res.send({
          status: false,
          message: "Something went wrong!",
          data: err,
        });
    });
});
app.post('/login',(req,res)=>{
  User.findOne({ email: req.body.username, password : req.body.password},function(err, user) {
    if (err == null) return res.send({
      status: true,
      message: "Otp sent to mobile!",
      data: user,
    });
    res.send({
      status: false,
      message: "Something went wrong!",
      data: err,
    });
});
  
});



