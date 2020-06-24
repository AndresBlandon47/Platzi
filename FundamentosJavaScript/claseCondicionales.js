var andres = {
	nombre: 'Andres',
	apellido: 'Blandon',
	edad: 23,
	administrador: true,
	cocinero: false,
	cantante: false,
	guitarrista: false,
	gamer: true
}

var fabiana = {
	nombre: 'Fabiana',
	apellido: 'Vargas',
	edad: 15,
	administrador: true,
	cocinero: false,
	cantante: false,
	guitarrista: false,
	gamer: true
}

const MAYOR_EDAD = 18
/*
function esMayorEdad(edad){
  return edad >= MAYOR_EDAD
}
*/

esMayorEdad = ({edad}) => edad >= MAYOR_EDAD
esMayorEdadV2 = (edad) => edad >= MAYOR_EDAD

esMenorEdad = ({edad}) => edad <= MAYOR_EDAD
esMenorEdadV2 = (edad) => edad <= MAYOR_EDAD



function imprimirMayorEdad(persona){
	if(esMayorEdad(persona)){
		console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} No es mayor de edad`)
  }
}

function imprimirMayorEdadV2({nombre,edad}){
	if(esMayorEdadV2(edad))
		console.log(`${nombre} es mayor de edad`)
	else
		console.log(`${nombre} NO es mayor de edad`)
}

function imprimirMenorEdad(persona){
  if(esMenorEdad(persona))
    console.log(`${persona.nombre} es menor de edad.`)
  else
    console.log(`${persona.nombre} NO es menor de edad.`)
}

imprimirMayorEdad(andres)
imprimirMayorEdad(fabiana)
imprimirMayorEdadV2(andres)
imprimirMayorEdadV2(fabiana)