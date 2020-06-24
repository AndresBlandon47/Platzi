var andres = {
	nombre: 'Andres',
	apellido: 'Blandon',
	altura: 1.69
}

var luisa = {
	nombre: 'Luisa',
	apellido: 'Castaño',
	altura: 1.69
}

var raul = {
	nombre: 'Raul',
	apellido: 'Higuera',
	altura: 1.72
}

var manuela = {
	nombre: 'Manuela',
	apellido: 'Muñoz',
	altura: 1.75
}

var magna = {
	nombre: 'Magna',
	Apellido: 'Blandon',
	altura: 1.78
}

var personas = [andres,luisa,raul,manuela,magna]

for (var i =  0; i < personas.length;i++){
	var persona = personas[i]
	console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

esAlta = ({altura}) => altura > 1.7

esBaja = ({altura}) => altura < 1.7

var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

var personasBajas = personas.filter(esBaja)
console.log(personasBajas)


//otra forma podria hacer la funcion dentro del filter
var personasAltasV2 = personas.filter(function(persona){
	return persona.altura > 1.7
})

var personasBajasV2 = personas.filter(function(persona){
	return persona.altura < 1.7
})

console.log(personasBajasV2)
console.log(personasAltasV2)