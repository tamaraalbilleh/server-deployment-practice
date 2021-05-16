'use strict';
// configs and dependencies //
const express = require('express');
const app = express ();
require ('dotenv').config();
const PORT = process.env.PORT || 5000;
// require the error pages // 
const error500Handler = require ('./error-handlers/500.js');
const error404Handler = require ('./error-handlers/404.js');
// routs //

// home Rout handler
app.get ('/' , homeHandler);
function homeHandler (req,res){
  res.send ('You are now on the Home Page , Hi ! 🥳 ');
    
}

// dev test handler 
app.get ('/dev' , serverVisibilityTestHandler);
function serverVisibilityTestHandler (req, res){
  res.send ('Server is visible ! 🤫');
}

// error handlers 
app.get ('/err' , dummyErrorHandler);
function dummyErrorHandler (req,res) {
  throw new Error ('something went wrong , perhaps your life 🌚🌝');
}
app.use (error500Handler);
app.use ('*', error404Handler);







// app is listening //
function start (PORT) {
  app.listen (PORT,()=>{
    console.log (`Listening on PORT : ${PORT}`);
  });
}
start (PORT);

// exporting functions from server.js  // 
module.exports = {
  app : app,
  start :start,
};