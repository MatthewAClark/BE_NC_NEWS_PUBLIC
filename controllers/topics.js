module.exports = {
    fetchAll(req, res, next) {
        res.status(200).send('getAllTopicsWorking')
       
    },
     fetchArticleById(req, res, next) {
        res.status(200).send('Fetch Article By ID Working')
      },
      createArticleByTopicId(req, res, next) {
        res.status(200).send('Fetch Article By ID Working')
      }
}