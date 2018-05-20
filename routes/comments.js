// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {comments} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/:comment_id', comments.fetchById);

router.delete('/:comment_id', comments.deleteById);

module.exports = router;