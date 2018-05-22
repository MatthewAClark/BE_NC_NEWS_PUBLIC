const { Topic, Article, User } = require('../models/index.js')

module.exports = {
  fetchAll(req, res, next) {
    //  res.status(200).send('getAllTopicsWorking')
    Topic.find({})
      .then(data => {
        res.status(200).send(data)
      })
  },
  fetchArticleById(req, res, next) {
    Article.find(req.params)
      .then(data => {
        res.status(200).send(data)
      })

  },
  createArticleByTopicId(req, res, next) {
    
    User.findOne({})
      .then(userData => {
       
        Article.create({ ...req.body, ...req.params, created_by: userData._id})
          .then(data => {
            res.status(200).send(data)
          })
      })


  }
}