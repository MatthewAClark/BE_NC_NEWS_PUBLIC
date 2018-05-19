const mongoose = require('mongoose');
const seedDB = require('./seed');

const connectionDB = () => {
    mongoose.connect('mongodb://localhost:27017/northcoders_news', () => {
        console.log('Connected to database')
        return seedDB();

    })
        .then((docs) => {
            console.log(docs)
            mongoose.disconnect()
        })
}

module.exports = connectionDB