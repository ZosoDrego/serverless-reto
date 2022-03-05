const starshipFieldsParse = {

	"MGLT": "MGLT",
	"cargo_capacity": "capacidad_de_carga",
	"consumables": "consumibles",
	"cost_in_credits": "costo_en_créditos",
	"created": "creado",
	"crew": "tripulación",
	"edited": "editado",
	"hyperdrive_rating": "calificación_hiperimpulsor",
	"length": "longitud",
	"manufacturer": "fabricante",
	"max_atmosphering_speed": "velocidad_atmosférica_máxima",
	"model": "modelo",
	"name": "nombre",
	"passengers": "pasajeros",
	"films": "peliculas",
	"pilots": "pilotos",
	"starship_class": "clase_de_nave_estelar",
	"url": "url"
};

const starshipParse = (starship) => {

	return Object.keys(starship).reduce((obj, field) => {

		const parse_field = starshipFieldsParse[field];
		obj[parse_field] = starship[field];
		return obj;
	}, {});
};

exports.starshipParse = starshipParse;