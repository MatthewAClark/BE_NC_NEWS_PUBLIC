module.exports = {
  fetchAll(req, res, next) {
    res.status(200).send('getMainAPI working');
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
};