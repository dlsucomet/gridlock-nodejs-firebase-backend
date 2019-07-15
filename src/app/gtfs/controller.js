var model = require('./model')

exports.getAgencies = function(req, res, next) {
  model.getAgencies().then(
    agencies => res.json(agencies)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getCalendars = function(req, res, next) {
  model.getCalendars().then(
    calendars => res.json(calendars)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getFeedInfo = function(req, res, next) {
  model.getFeedInfo().then(
    feedInfo => res.json(feedInfo)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getFrequencies = function(req, res, next) {
  model.getFrequencies().then(
    frequencies => res.json(frequencies)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getRoutes = function(req, res, next) {
  model.getRoutes().then(
    routes => res.json(routes)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getShapes = function(req, res, next) {
  model.getShapes().then(
    shapes => res.json(shapes)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getStoptimes = function(req, res, next) {
  model.getStoptimes().then(
    stopTimes => res.json(stopTimes)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getStops = function(req, res, next) {
  model.getStops().then(
    stops => res.json(stops)
  ).catch(err => {
    res.status(500).json(err)
  })
}

exports.getTrips = function(req, res, next) {
  model.getTrips().then(
    trips => res.json(trips)
  ).catch(err => {
    res.status(500).json(err)
  })
}