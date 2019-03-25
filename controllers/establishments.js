const Establishments = require('../models/establishment')

function indexRoute(req, res) {
  let { longitude, latitude} = req.query
  // const select = fields ? fields.split(',') : []
  console.log('indexRoute ', longitude, latitude)
  latitude = parseFloat(latitude)
  longitude = parseFloat(longitude)

  Establishments
    .find()
    .where('geocode.latitude').gt(latitude-0.1).lt(latitude+0.1)
    .where('geocode.longitude').gt(longitude-0.1).lt(longitude+0.1)
    .then(establishments => res.json(establishments))
}

function showRoute(req, res) {
  Establishments
    .findById(req.params.id)
    .then(establishment => res.json(establishment))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
