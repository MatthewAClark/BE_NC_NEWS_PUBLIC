const { Article, Comment } = require('../models/index.js')

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
    res.status(200).send('create comments by article ID')

},
updateVotesByArticleId(req, res, next) {
    res.status(200).send('create comments by article ID')

}
}