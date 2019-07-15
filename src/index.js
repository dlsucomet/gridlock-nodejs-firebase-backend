var express = require('express')
var app = express()
var gtfsRouter = require('./app/gtfs/router')
var gtfs = require('gtfs')
const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

const port = 3000

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.get('/agencies', async (req, res) => {
  gtfs.getAgencies().then( agencies => {
    res.json(agencies)
  })
})

app.get('/stops', async (req, res) => {
  gtfs.getStops().then( stops => {
    res.json(stops)
  })
})

app.get('/routes', async (req, res) => {
  gtfs.getRoutes().then( routes => {
    res.json(routes)
  })
})

app.get('/calendars', async (req,res) => {
  gtfs.getCalendars().then( calendars => 
    res.json(calendars))
})

app.get('/feed_info', async (req,res) => {
  gtfs.getFeedInfo().then( feedInfo => 
    res.json(feedInfo))
})

app.get('/frequencies', async (req,res) => {
  gtfs.getFrequencies().then( frequencies => 
    res.json(frequencies))
})

app.get('/shapes', async (req, res) => {
  gtfs.getShapes().then( shapes => {
    res.json(shapes)
  })
})

app.get('/stop_times', async(req,res) => {
  gtfs.getStoptimes().then( stopTimes => {
    res.json(stopTimes)
  })
})

app.get('/trips', async(req,res) => {
  gtfs.getTrips().then( trips => {
    res.json(trips)
  })
})




app.listen(port, () => console.log('Gridlock API listening on port 3000'));