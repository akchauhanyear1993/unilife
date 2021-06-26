var express           = require('express');
var mongoose          = require('mongoose');
var Item              = require('./models/item');
var User              = require('./models/user');
var nodemailer        = require('nodemailer');
const University      = require('./models/university');
const Degree          = require('./models/degree');
const Country         = require('./models/country');
const Programme       = require('./models/programme');
const Years           = require('./models/years');
const User_device     = require('./models/user_device');
const User_course     = require('./models/user_course');
const Profile         = require('./models/profile');
const Interest        = require('./models/interest');
const Achievement     = require('./models/achievement');
const Language        = require('./models/language');
const Skills          = require('./models/skills');
const Education       = require('./models/education');
const Experience       = require('./models/experience');
//const Highlights      = require('./models/highlights');
const University_schools = require('./models/university_schools');
const  Otp              = require('./models/otp');
const Domain            = require('./models/domain');

// event_link_user_list , friend_lists, posts, post_attachments



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
  User.find({ email: req.body.username, password : req.body.password},function(err, user) {
   
    if (err == null) return res.send({
      response: true,
      message: "login successfuly",
      data: user,
    });
    res.send({
      status: false,
      message: "Something went wrong!",
      data: err,
    });
  });
  
});

app.post('/user-device',(req,res)=>{
  
  let user_id       =  req.body.user_id;
  let device_token  =  req.body.device_token;
  let device_id     =  req.body.device_id;
  let type          =  req.body.type;

  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;

  let devicedata = {'user_id'        : user_id,
                      'device_token'  : device_token,
                      'device_id'     : device_id,
                      'type'          : type,
                      'created_at'    : dateTime,
                      'updated_at'    : dateTime
                     };
  
  const device = new User_device(devicedata);

  device.save(function(err, device) {
      if (err == null) return res.send({
        response :true
        
      });
      res.send({
        response :false
      });
  });
    
});

app.post('/emailverification',(req,res)=>{

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user: 'abc@gmail.com',
      pass: 'abc@12345'
    }
});
 
  let usermail = req.body.email;
  let otpnum = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  let otpData = {
                'otp' : otpnum,
                'email' : usermail,
                'created_date' :  Date.now()
              };
    console.log(otpData);
      const otp = new Otp(otpData);
      var mailOptions = {
        from: "codertanu@gmail.com",
        to: "amreshkumar.com@gmail.com",
        subject: "Email Verification",
        text: "Your Email verification Otp is: "+otpnum,
      };
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      otp.save().then(()=>{
        res.send({ status : true, message: 'Otp has been sent to email', data: otpData});
       
      }).catch((e)=>{
        res.send({ status : false, message: 'Otp has failed to send', data: []});
      })

});


//**** Email Api End *******//


//**** Otp Verification *******//
app.post("/otp_verify", (req, res) => {
  let useremail = req.body.email;
  let verifyotp = req.body.otp;
  
  Otp.find({ email: useremail, otp : verifyotp })
    .then((data) => {
      if(data[0].otp == verifyotp) {
        var myquery = { otp : verifyotp };
        var newvalues = { $set: {verify: "yes"} };
        Otp.updateOne(myquery, newvalues, function(err, res) {});


        res.send({
          status: true,
          message: "OTP has verified successfully",
          data: [],
        });
      } else {
        res.send({
          status: false,
          message: "Incorrect OTP",
          data: [],
        });
      }
    })
    .catch((e) => {
      res.send(e);
    });
});


//**** Otp Verification *******//
app.post("/get_uni_id_using_domain", (req, res) => {
  let domain = req.body.domain;
  
  
  Domain.find({ domain: domain, status : "active"})
    .then((data) => {
      let domaindata = data;
      if(domaindata.length > 0) {

        res.send({
          status: true,
          message: "domain is verified",
          data: domaindata,
        });
      } else {
        res.send({
          status: false,
          message: "domain is not verified",
          data: [],
        });
      }
    })
    .catch((e) => {
      res.send(e);
    });
});


//**** Otp verification *******//





