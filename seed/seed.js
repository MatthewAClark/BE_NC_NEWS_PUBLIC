// Require components
const mongoose = require('mongoose');
//process.env.NODE_ENV =  process.env.NODE_ENV || 'dev';

// Import schemas from models
const {
  Article, Comment, Topic, User 
} = require('../models');

// Define the data
const {
  articleData, commentsData, topicsData, usersData
} = require(`./${process.env.NODE_ENV}Data`);

const seedDB = () => {
  //let userList
    
  return mongoose.connection.dropDatabase()

    .then(() => {
      return Promise.all([Topic.insertMany(topicsData), User.insertMany(usersData)]);
    })

    .then(([topics, users]) => {
      let newArticleData = articleData.map(article => {
        const userId = users.filter(user => user.username === article.created_by)[0]._id;
        const topicId = topics.filter(topic => topic.slug === article.topic)[0]._id;
        return {...article, belongs_to: topicId, created_by: userId};
      });
        //console.log(articleData)
        //userList = users
      return Promise.all([Article.insertMany(newArticleData),topics,users]);

    
    })

    .then(([articles, topics, users]) => {

      // console.log(articles)
        
      let newCommentsData = commentsData.map(comment => {
        const articleId = articles.filter(article => article.title === comment.belongs_to)[0]._id; 
        const userId = users.filter(user => user.username === comment.created_by)[0]._id;
        return {...comment, belongs_to: articleId, created_by: userId};
            
      });

      return Promise.all([Comment.insertMany(newCommentsData),articles, topics, users]);
    });

  // .then((docs) => {
  //     console.log(docs)
  //     mongoose.disconnect()
  // })
   
};

module.exports = seedDB;