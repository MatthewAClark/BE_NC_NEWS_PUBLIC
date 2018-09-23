/*eslint-disable no-console */
const mongoose = require('mongoose');
const seedDB = require('./seed');

const connectionDB = () => {
  mongoose.connect('mongodb://localhost:27017/northcoders_news', () => {
    console.log('Connected to database');
    return seedDB();
    //console.log('before this')

  });
  // .then((docs) => {
  //     console.log('should not read this')
  //     mongoose.disconnect()
            
  // })
};

module.exports = connectionDB;