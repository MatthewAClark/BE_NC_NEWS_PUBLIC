const { Article, Comment, User } = require('../models/index.js');

module.exports = {
  fetchAll(req, res, next) {
    Article.find({}).populate('belongs_to')
      .then(data => {
        res.status(200).send(data);
      })
      .catch(() => next({ status: 404, error: 'Unable to fetch request' }));

  },
  fetchById(req, res, next) {
    Article.findOne(req.params)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(() => next({ status: 404, error: 'Unable to fetch request' }));

  },
  fetchCommentsByArticleId(req, res, next) {

    Comment.find(req.params)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(() => next({ status: 404, error: 'Unable to fetch request' }));

  },
  createCommentsByArticleId(req, res, next) {

    User.findOne({})
      .then(userData => {
        return Comment.create({ ...req.body, ...req.params, created_by: userData._id });

      }).then(data => {
        res.status(200).send(data);
      })
      .catch(() => next({ status: 404, error: 'Unable to fetch request' }));

  },
  updateVotesByArticleId(req, res, next) {

    let qVote = 0;
    if (req.query.vote === 'up') qVote = 1;
    if (req.query.vote === 'down') qVote = -1;

    return Article.findByIdAndUpdate(req.params._id, { $inc: { votes: qVote } }, { new: true })
      .then(voteResult => {
        res.status(200).send(voteResult);
      })
      .catch(() => next({ status: 404, error: 'Unable to fetch request' }));
  }

};