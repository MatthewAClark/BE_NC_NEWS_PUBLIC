// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {comments} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/:comment_id', comments.fetchById);

router.put('/:_id', comments.updateVotesByCommentId);

router.delete('/:_id', comments.deleteById);

module.exports = router;