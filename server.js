process.env.NODE_ENV =  process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV !== 'production') require('dotenv').config({
  path: `./.${process.env.NODE_ENV}.env`
});
console.log(process.env.NODE_ENV)
// Connect to DB
const connectToDB = require('./seed');
if (process.env.NODE_ENV !== 'test') connectToDB();

// require the needed modules
const express = require('express');
const mongoose = require('mongoose');
const app = require('express')();
const url = require('./config');
console.log(url)
const cors = require('cors');

// Connect to database
mongoose.connect(url);

// Define routes
const apiRoutes = require('./routes/apiRoutes.js');

// Static express
app.use(express.static('public'));

// corse
app.use(cors());

// parse JSON
const{json} = require('body-parser');
app.use(json());

//API routes
app.use('/api', apiRoutes);

// Server status
app.get('/', (req, res) => {
 
});
//
app.use((err, req, res, next) => {
  
  return res.status(err.status).send({err: err.error});
});
  
module.exports = app;

