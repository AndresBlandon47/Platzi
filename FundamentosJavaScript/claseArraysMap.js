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

pasarAlturaCms = persona => {
  return {
		...persona,
		altura: persona.altura * 100
	}
}

// Otra forma de hacer la función de arriba es quitando el return y colocando () antes de las llaves

pasarAlturaCmsV2 = persona => ({
	...persona,
	altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaCms)

var personasCmsV2 = personas.map(pasarAlturaCmsV2)

console.log(personasCms)
console.log(personasCmsV2)