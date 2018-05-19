const mongoose = require('mongoose');
const seedDB = require('./seed');
mongoose.connect('mongodb://localhost:27017/northcoders_news', () => {
    console.log('Connected to database')
    seedDB();
})