var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohitklamba@gmail.com',
    pass: 'Senerade#1'
  }
});

var mailOptions = {
  from: 'mohitklamba@gmail.com',
  to: 'mohit.mlass@gmail.com',
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