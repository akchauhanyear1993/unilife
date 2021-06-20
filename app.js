var express = require('express');
var mongoose = require('mongoose');
var Item = require('./models/item');
var User = require('./models/user');
var nodemailer = require('nodemailer');

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
  const user = new User(req.body);
  var mailOptions = {
    from: 'amreshkumar.com@gmail.com',
    to: 'amresh.neoarks@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  user.save().then(()=>{
    res.send(user);
  }).catch((e)=>{
    res.send(e);
  })
  
});


//********** Signup Api End *****************//

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


