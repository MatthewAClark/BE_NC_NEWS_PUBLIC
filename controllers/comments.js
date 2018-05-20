module.exports = {
    fetchById(req, res, next) {
        res.status(200).send('Comment ID sent')
        
    },
     deleteById(req, res, next) {
        res.status(200).send('delete by Id')
    }
}