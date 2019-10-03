const express = require("express");
const path = require("path");
var nodeMailer = require('nodemailer');
const { google } = require("googleapis");

require('dotenv').config()

const OAuth2 = google.auth.OAuth2;

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post('/contact', function(req, res){

  const oauth2Client = new OAuth2(
    process.env.REACT_APP_CLIENT_ID, // ClientID
    process.env.REACT_APP_CLIENT_SECRET, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REACT_APP_REFRESH_TOKEN
  });
  const accessToken = oauth2Client.getAccessToken()

  const smtpTrans = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.REACT_APP_USER_EMAIL,
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
      accessToken: accessToken,
    }
  });
  const mailOpts = {
    //from: req.body.fname +" "+ req.body.fname +" @ "+ req.body.email,
    to: 's4c.contactus@gmail.com',
    subject: req.body.email + ' --Msg from contact us form --',
    text: `Name: '${req.body.fname} ${req.body.lname} Email: ${req.body.email} 
    Contact No: ${req.body.contactNo ? req.body.contactNo : "-none provided-"}
    Query: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function(error, response){
    error ? res.send(error) : res.send(response); //for now
    smtpTrans.close();
  });
});

app.post('/partners', function(req, res){

  const oauth2Client = new OAuth2(
    process.env.REACT_APP_CLIENT_ID, // ClientID
    process.env.REACT_APP_CLIENT_SECRET, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REACT_APP_REFRESH_TOKEN
  });
  const accessToken = oauth2Client.getAccessToken()

  const smtpTrans = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.REACT_APP_USER_EMAIL,
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
      accessToken: accessToken,
    }
  });
  const mailOpts = {
    //from: req.body.fname +" "+ req.body.fname +" @ "+ req.body.email,
    to: 's4cpartners@gmail.com',
    subject: req.body.email + ' --Msg from partner form --',
    text: `Name: '${req.body.fname} ${req.body.lname} Email: ${req.body.email} 
    Contact No: ${req.body.contactNo ? req.body.contactNo : "-none provided-"}
    Query: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function(error, response){
    error ? res.send(error) : res.send(response); //for now
    smtpTrans.close();
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
