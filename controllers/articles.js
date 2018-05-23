const { Article, Comment, User } = require('../models/index.js')

module.exports = {
  fetchAll(req, res, next) {


    Article.find({})
      .then(data => {
        res.status(200).send(data)
      })

  },
  fetchById(req, res, next) {
    Article.findOne(req.params)
      .then(data => {

        res.status(200).send(data)
      })

  },
  fetchCommentsByArticleId(req, res, next) {

    Comment.find(req.params)
      .then(data => {
        res.status(200).send(data)
      })
    //  res.status(200).send('getComments by article ID')

  },
  createCommentsByArticleId(req, res, next) {
    // res.status(200).send('create comments by article ID')
    User.findOne({})
      .then(userData => {
        console.log({ ...req.body, ...req.params, created_by: userData._id })

        return Comment.create({ ...req.body, ...req.params, created_by: userData._id })

      }).then(data => {
        console.log(data)
        res.status(200).send(data)
      })

  },
  updateVotesByArticleId(req, res, next) {
    //console.log(req.query, req.params._id, )
    let qVote = 0;
    if (req.query.vote === 'up') qVote = 1;
    if (req.query.vote === 'down') qVote = -1;

    return Article.findByIdAndUpdate(req.params._id, { $inc: { votes: qVote } }, { new: true })
      .then(voteResult => {
        res.status(200).send(voteResult)
      })
  }

  //res.status(200).send('create comments by article ID')


}