var router = require('express').Router()
var model = require('./model')

router.get('/', (req, res) => {
  console.log("Pass")
  res.send("heloo")
  model.getAgencies().then( agencies => {
    res.send(agencies)
  })
})

module.exports = router