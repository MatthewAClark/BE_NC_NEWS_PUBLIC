// require essentials
const express = require('express');
const router = express.Router();

// require circuits controller
const {users} = require('../controllers/index.js');

// Point to the right controller functions

router.get('/:username', users.fetchUserByUsername);

//router.get('/:id', drivers.fetchDriver);

module.exports = router;