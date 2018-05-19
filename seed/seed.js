// Require components
const mongoose = require('mongoose');


// Import schemas from models
const {
    Article, Comment, Topic, User 
} = require('../models');

// Define the data
const {
    articleData, commentsData, topicsData, usersData
} = require('./devData');

const seedDB = () => {
    //let userList
    return mongoose.connection.dropDatabase()

    .then(() => {
        return Promise.all([Topic.insertMany(topicsData), User.insertMany(usersData)])
    })

    .then(([topics, users]) => {
        articleData.forEach(article => {
            article.created_by = users.filter(user => user.username === article.created_by)[0]._id
            article.belongs_to = topics.filter(topic => topic.slug === article.topic)[0]._id
        });
        //console.log(articleData)
        //userList = users
        return Promise.all([Article.insertMany(articleData),topics,users])

    
    })

    .then(([articles, topics, users]) => {
        commentsData.forEach(comment => {
            comment.belongs_to = articles.filter(article => article.title === comment.belongs_to)[0]._id 
            comment.created_by = users.filter(user => user.username === comment.created_by)[0]._id
        })
        return Promise.all([Comment.insertMany(commentsData),articles, topics, users])
    })

    // .then((docs) => {
    //     console.log(docs)
    //     mongoose.disconnect()
    // })
}

module.exports = seedDB