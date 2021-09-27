const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
	const { id } = req.params

  if (!id) {
    context.res = {
      status: 400,
      body: 'Please enter the correct Vehicle plate number!'
    }

    return
  }

	const { db, connection } = await createMongoClient()

  const Vehicle = db.collection('vehicles')

  try {
    const body = await Vehicle.findOneAndDelete({ plate: id })
    connection.close()

		if(body != null)
    	context.res = {status: 200,body}
		else
			context.res = {status: 201, body: {response:"No se encontro vehículo con esa placa"} }
		} catch (error) {
    context.res = {
      status: 500,
      body: 'Error listing Vehicle by plateNumber.'
    }
  }
}