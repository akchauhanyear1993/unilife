var express = require('express');
var mongoose = require('mongoose');
var Item = require('./models/item');
var User = require('./models/user');
var nodemailer = require('nodemailer');
const Otp = require('./models/otp');

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
var promise = mongoose.connect('mongodb+srv://dubai_students_93:dubai_students_93@unilife.jxohc.mongodb.net/dubai_students_93?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
promise.then(function(db) {
    console.log("Connected to database!!!");
}, function(err){
    console.log("Error in connecting database " + err);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.listen(port, function () {
  // app.get('port')
  console.log('Listening on port ' + port);
});
app.use(express.json());
 
// app.get('/',(req,res)=>{
//   res.send("Hi Dubai Student!!!");
//   console.log("Hi Dubai Student!!!");
// });

app.post('/students',(req,res)=>{
  const item = new Item(req.body);
  
  item.save().then(()=>{
    res.send(item);
  }).catch((e)=>{
    res.send(e);
  })
  
});

//********** Signup Api *****************//

app.post('/registration',(req,res)=>{
 
  let id   = req.body.id;
  let user_type   = req.body.user_type;
  let username   = req.body.username;
  let university_school_id   = req.body.university_school_id;
  let university_school_email   = req.body.university_school_email;
  let password   = req.body.password;
  let currtime = Date.now();


  let userdata = {
                  'id'                      : id,
                  'user_type'               : user_type,
                  'username'                : username,
                  'university_school_id'    : university_school_id,
                  'university_school_email' : university_school_email,
                  'password'                : password,
                  'decoded_password'        : password,
                  'created_on'              : currtime

                  };

const user = new User(userdata);
let otpnum = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
let otpData = {'id' : id,
                'otp' : otpnum,
                'email' : university_school_email,
                'created_date' : currtime
              };

const otp = new Otp(otpData);
  
  user.save().then(()=>{
    otp.save().then().catch();
     
    res.send({ status : true, message: 'Otp has been sent to email', data: user});
   
  }).catch((e)=>{
    res.send(e);
  })
 
  
});


//********** Signup Api End *****************//


//********** Otp Verification *****************//

app.post('/otp_verify',(req,res)=>{
  
  let useremail = req.body.email;
  let verifyotp = req.body.otp;

  const otp = new Otp(req.body);
  
  let data = Otp.find().then(()=>{}).catch((e)=>{
    res.send(e);
  });

  console.log(data);
  
});


//********** Otp verification *****************//


//********** Login Api *****************//

app.post('/login',(req,res)=>{
  const user = new User(req.body);

  User.findOne().then(()=>{
    res.send(user);
  }).catch((e)=>{
    res.send(e);
  })
  
});


//********** Login Api End *****************//



