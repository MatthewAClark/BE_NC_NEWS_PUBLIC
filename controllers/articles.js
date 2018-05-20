module.exports = {
    fetchAll(req, res, next) {
        res.status(200).send('getAllArticlesWorking')
        
    },
     fetchById(req, res, next) {
         res.status(200).send('getByIdWorking')
  
   }, 
   fetchCommentsByArticleId(req, res, next) {
    res.status(200).send('getComments by article ID')

},
createCommentsByArticleId(req, res, next) {
    res.status(200).send('create comments by article ID')

},
updateVotesByArticleId(req, res, next) {
    res.status(200).send('create comments by article ID')

}
}