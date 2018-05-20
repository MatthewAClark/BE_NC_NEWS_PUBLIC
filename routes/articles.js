// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {articles} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/', articles.fetchAll);

router.get('/:article_id', articles.fetchById);

router.get('/:article_id/comments', articles.fetchCommentsByArticleId);

router.post('/:article_id/comments', articles.createCommentsByArticleId);

router.put('/:article_id/', articles.updateVotesByArticleId);

module.exports = router;