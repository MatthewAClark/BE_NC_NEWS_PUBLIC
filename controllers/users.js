//const { users} = require('../models/index.js')

module.exports = {
    fetchUserByUsername(req, res, next) {
        res.status(200).send('fetch user by name')
       
    }

}