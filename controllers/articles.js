const { Article, Comment, User } = require('../models/index.js')

module.exports = {
  fetchAll(req, res, next) {


    Article.find({}).populate('belongs_to')
      .then(data => {
        console.log('pop data')
        res.status(200).send(data)
      })

  },
  fetchById(req, res, next) {
    Article.findOne(req.params)
      .then(data => {
console.log('Here in fetch article')
        res.status(200).send(data)
      })

  },
  fetchCommentsByArticleId(req, res, next) {

    Comment.find(req.params)
      .then(data => {
        res.status(200).send(data)
      })

  },
  createCommentsByArticleId(req, res, next) {
    
    User.findOne({})
      .then(userData => {
        return Comment.create({ ...req.body, ...req.params, created_by: userData._id })

      }).then(data => {
        res.status(200).send(data)
      })

  },
  updateVotesByArticleId(req, res, next) {
   
    let qVote = 0;
    if (req.query.vote === 'up') qVote = 1;
    if (req.query.vote === 'down') qVote = -1;

    return Article.findByIdAndUpdate(req.params._id, { $inc: { votes: qVote } }, { new: true })
      .then(voteResult => {
        res.status(200).send(voteResult)
      })
  }

  


}