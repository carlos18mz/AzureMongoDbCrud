const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
    const vehicle= req.body || {}

    if (vehicle) {
        context.res = {
          status: 400,
          body: 'Dish data is required! '
        }
      }
  
      const { db, connection } = await createMongoClient()
  
      const Vehicles = db.collection('reported')
  
      try {
          const vehicles = await Vehicles.insertOne(vehicle)
          connection.close()
          context.log("data : ",vehicles)
          context.res = {
            status: 201,
            body: vehicle
          }
        } catch (error) {
          context.res = {
            status: 500,
            body: 'Error inserting a new Reported Vehicle'
          }
        }
}