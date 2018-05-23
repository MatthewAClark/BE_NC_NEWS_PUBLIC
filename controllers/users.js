const { User} = require('../models/index.js')

module.exports = {
    fetchUserByUsername(req, res, next) {
        console.log(req.params)
        User.findOne(req.params)
      .then(data => {

        res.status(200).send(data)
      })
       
    }

}