// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {topics} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/', topics.fetchAll);

router.get('/:belongs_to/articles', topics.fetchArticleById)

router.post('/:belongs_to/articles', topics.createArticleByTopicId)

//router.get('/:id', drivers.fetchDriver);

module.exports = router;