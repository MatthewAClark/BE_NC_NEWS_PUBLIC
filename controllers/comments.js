const { Comment } = require('../models/index.js')

module.exports = {
    fetchById(req, res, next) {
        res.status(200).send('Comment ID sent')
        
    },
     deleteById(req, res, next) {
         return Comment.findByIdAndRemove(req.params._id)
         .then(deletedComment => {
            res.status(200).send(deletedComment)
         })
    },
    updateVotesByCommentId(req, res, next) {
        let qVote = 0;
        if (req.query.vote === 'up') qVote = 1;
        if (req.query.vote === 'down') qVote = -1;
    
        return Comment.findByIdAndUpdate(req.params._id, { $inc: { votes: qVote } }, { new: true })
          .then(voteResult => {
            res.status(200).send(voteResult)
          })
    }
}