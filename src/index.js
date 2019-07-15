var express = require('express')
var app = express()
var router = express.Router();

const port = 3000

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

var gtfsRoutes = require('./app/gtfs/routes')

app.use('/api', router)
gtfsRoutes(router)


app.listen(port, () => console.log('Gridlock API listening on port 3000'));