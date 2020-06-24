var andres = {
	nombre: 'Andres',
	apellido: 'Blandon',
	edad: 23,
	peso: 65
}

const INCREMENTO_PESO = 0.2
var dias = 0

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso}kg`)

aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
comeMucho = () => Math.random() < 0.3
deporte = () => Math.random() < 0.4


const META = andres.peso - 3

while (andres.peso > META){
	if(comeMucho())
		aumentarPeso(andres)
	if(deporte())
		adelgazar(andres)
	dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${andres.nombre} adelgazo ${andres.peso}`)
