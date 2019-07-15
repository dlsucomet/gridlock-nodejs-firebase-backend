

var controller = require('./controller')

module.exports = function(router) {
  router.get('/agency', controller.getAgencies)
  router.get('/calendar', controller.getCalendars)
  router.get('/feed_info', controller.getFeedInfo)
  router.get('/frequencies', controller.getFrequencies)
  router.get('/routes', controller.getRoutes)
  router.get('/shapes', controller.getShapes)
  router.get('/stop_times', controller.getStoptimes)
  router.get('/stops', controller.getStops)
  router.get('/trips', controller.getTrips)
}