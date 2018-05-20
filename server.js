if (process.env.NODE_ENV !== 'test') process.env.NODE_ENV = 'dev';

// require the needed modules
const app = require('express')();
const mongoose = require('mongoose');
const connectionDB = require(`./seed/seed.${process.env.NODE_ENV}.js`)

// ejs
app.set('view engine', 'ejs');

// Connect to the database
//connectionDB()

// Define routes
const apiRoutes = require('./routes/apiRoutes.js')

// parse JSON
const{json} = require('body-parser');
app.use(json());

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Server working')
})
//
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status).send({err: err.error})
  })
  
  
  
  
  module.exports = app

