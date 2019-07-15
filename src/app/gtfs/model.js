const gtfs = require('gtfs');
const mongoose = require('mongoose');
const config = require('../../config.json');

mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

exports.getAgencies = async () => {
  return await gtfs.getAgencies()
}

exports.getCalendars = async () => {
  return await gtfs.getCalendars()
}

exports.getFeedInfo = async () => {
  return await gtfs.getFeedInfo()
}

exports.getFrequencies = async () => {
  return await gtfs.getFrequencies()
}

exports.getRoutes = async () => {
  return await gtfs.getRoutes()
}

exports.getShapes = async () => {
  return await gtfs.getShapes()
}

exports.getStoptimes = async () => {
  return await gtfs.getStoptimes()
}

exports.getStops = async () => {
  return await gtfs.getStops()
}

exports.getTrips = async () => {
  return await gtfs.getTrips()
}