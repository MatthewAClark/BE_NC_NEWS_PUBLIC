const routes = {
    users: require('./users'),
    articles: require('./articles'),
    comments: require('./comments'),
    topics: require('./topics')
}

const {main} = require('../controllers/index.js')

const express  = require('express');
const router = express.Router();


router.get('/', main.fetchAll);

router.use('/users', routes.users);

router.use('/comments', routes.comments);

router.use('/topics', routes.topics);

router.use('/articles', routes.articles)


module.exports = router;