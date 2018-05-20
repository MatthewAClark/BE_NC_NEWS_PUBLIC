//const { users} = require('../models/index.js')

module.exports = {
    fetchUserByUsername(req, res, next) {
        res.status(200).send('fetch user by name')
        // Circuit.find({})
        // .then(data => {
        //  //   res.status(200).send(data)
        //     res.render('pages/circuits', {data: data})
        // })
        // .catch(err => {
        //     res.status(500).send(err)
        // })
    },
    // fetchCircuit(req, res, next) {
    //     Circuit.findOne({ _id: req.params.id })
    //     .then(circuit => {
    //         res.status(200).send(circuit)
    //     })
    //     .catch(err => {
    //         res.status(500).send(err)
    //     })
   // }
}