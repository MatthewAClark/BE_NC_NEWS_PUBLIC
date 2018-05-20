// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {topics} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/', topics.fetchAll);

router.get('/:topic_id/articles', topics.fetchArticleById)

router.post('/:topic_id/articles', topics.createArticleByTopicId)

//router.get('/:id', drivers.fetchDriver);

module.exports = router;