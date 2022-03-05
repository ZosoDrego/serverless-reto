const axios = require('axios').default;
const starshipParse = require('models/translate');
const Dynamo = require('models/Dynamo');
module.exports.setDataDynamoApi = async function (event, context, callback) {
	
    let Id = event.pathParameters.Id;
    var starship_translate = await axios.get('https://swapi.py4e.com/api/starships/' + Id + '/?format=json');
    var starship = starshipParse.starshipParse(starship_translate.data);

    starship.Id = Id;
    
    const newStarship = await Dynamo.write(starship,'starships').catch(error =>{
      console.log('Error:', error);
      return "OCURRION UN ERROR AL MOMENTO DE INSERTAR";
    })
    const data = {
        statusCode: 200,
        body: JSON.stringify(newStarship)
      };
    return callback(null,data)
  };  

	