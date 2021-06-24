var express = require('express');
var mongoose = require('mongoose');
var Item = require('./models/item');
//var User = require('./models/user');
var nodemailer = require('nodemailer');
const University = require('./models/university');
const Degree = require('./models/Degree');
const Country = require('./models/Country');
const Programme = require('./models/Programme');
const Years = require('./models/Years');




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

//*********** University list  ends *************************//



//*********** Degree list *************************//

app.get('/degree-list',(req,res)=>{

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

//*********** Degree list  ends *************************//


//*********** years list *************************//

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

//*********** Years list  ends *************************//



//*********** Programme list *************************//

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

//*********** Programme list  ends *************************//




//*********************** old Api starts here  ****************************************/


//********** Email Api *****************//

// app.post('/emailverification',(req,res)=>{
 
//   let usermail = req.body.email;
//   let otpnum = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
//   let otpData = {
//                 'otp' : otpnum,
//                 'email' : usermail,
//                 'created_date' :  Date.now()
//               };
//     console.log(otpData);
//       const otp = new Otp(otpData);
     

//       otp.save().then(()=>{
//         res.send({ status : true, message: 'Otp has been sent to email', data: otpData});
       
//       }).catch((e)=>{
//         res.send({ status : false, message: 'Otp has failed to send', data: []});
//       })

// });


//********** Email Api End *****************//


//********** Otp Verification *****************//
// app.post("/otp_verify", (req, res) => {
//   let useremail = req.body.email;
//   let verifyotp = req.body.otp;
  
//   Otp.find({ email: useremail })
//     .then((data) => {
//       if(data[0].otp == verifyotp) {

//         res.send({
//           status: true,
//           message: "OTP has verified successfully",
//           data: [],
//         });
//       } else {
//         res.send({
//           status: false,
//           message: "Incorrect OTP",
//           data: [],
//         });
//       }
//     })
//     .catch((e) => {
//       res.send(e);
//     });
// });


//********** Otp verification *****************//



//********** Signup Api *****************//

// app.post('/registration',(req,res)=>{
 
//   let date_of_birth         = req.body.date_of_birth;
//   let username          = req.body.username;
//   let gender            = req.body.gender;
//   let university_school_email   = req.body.email;
//   let password          = req.body.password;
//   let profile_image     = req.body.profile_image;
//   let university_id     = req.body.university_id;

//   let currtime = Date.now();
//   let userdata = {
                 
//                   'user_type'               : 0,
//                   'username'                : username,
//                   'university_school_id'    : university_id,
//                   'university_school_email' : university_school_email,
//                   'gender'                  : gender,
//                   'date_of_birth'           : date_of_birth,
//                   'profile_image'           : profile_image,
//                   'password'                : password,
//                   'decoded_password'        : password,
//                   'created_on'              : currtime

//                   };

  
// const user = new User(userdata);
//   user.save().then((data)=>{
//     let id = data._id;
//     res.send({ status : true, message: 'Register successfully' , "id" : id });
   
//   }).catch((e)=>{
//     res.send({status : false, message : e });
//   })
 
  
// });


//********** Signup Api End *****************//

//********** Login Api *****************//

// app.post('/login',(req,res)=>{

//   const useremail = req.body.username;
//   const userpassword = req.body.password;

//   User.find({ university_school_email: useremail, password : userpassword })
//     .then((data) => {
//       let userdata = data;
//       if(userdata.length > 0) {

//         res.send({
//           status: true,
//           message: "Login successfully",
//           data: userdata,
//         });
//       } else {
//         res.send({
//           status: false,
//           message: "Login failed",
//           data: [],
//         });
//       }
  
//     })
//     .catch((e) => {
//       res.send(e);
//     });

  
  
// });


//********** Login Api End *****************//



