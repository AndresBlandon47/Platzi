var andres = {
	nombre: 'Andres',
	apellido: 'Blandon',
	edad: 23,
	peso: 65
}

const INCREMENTO_PESO = 0.2


console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso}kg`)

aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for(var i = 0; i < 365; i++){
	var random = Math.random()
	if (random < 0.25)
		aumentarPeso(andres)
	else if(random < 0.50)
		aumentarPeso(andres)
	else
		adelgazar(andres)
}

console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(2)}kg`)
