// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {articles} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/', articles.fetchAll);

router.get('/:_id', articles.fetchById);

router.get('/:belongs_to/comments', articles.fetchCommentsByArticleId);

router.post('/:belongs_to/comments', articles.createCommentsByArticleId);

router.put('/:_id/', articles.updateVotesByArticleId);

module.exports = router;