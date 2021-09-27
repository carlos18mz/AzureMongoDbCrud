const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
  const { id } = req.params
  const vehicle = req.body || {}

  if (!id || !dish) {
    context.res = {
      status: 400,
      body: 'Fields are required'
    }

    return
  }


  const { db, connection } = await createMongoClient()
  const Vehicles = db.collection('vehicles')

  try {
    const vehicles = await Vehicles.findOneAndUpdate(
      { plate: id },
      { $set: vehicle }
    )

    connection.close()

    context.res = {
      status: 200,
      body: vehicles
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error updating a vehicle'
    }
  }
}