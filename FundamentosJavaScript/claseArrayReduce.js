//La función reduce sirve para sacar un calculo en especifico de un atributo de los objetos.


var andres = {
	nombre: 'Andres',
	apellido: 'Blandon',
  altura: 1.69,
  libros: 13
}

var luisa = {
	nombre: 'Luisa',
	apellido: 'Castaño',
  altura: 1.69,
  libros: 50
}

var raul = {
	nombre: 'Raul',
	apellido: 'Higuera',
  altura: 1.72,
  libros: 20
}

var manuela = {
	nombre: 'Manuela',
	apellido: 'Muñoz',
  altura: 1.75,
	libros: 30
}

var magna = {
	nombre: 'Magna',
	Apellido: 'Blandon',
  altura: 1.78,
  libros : 3
}

var personas = [andres,luisa,raul,manuela,magna]

reducer = (acum, persona) => {
  return acum = acum + persona.libros
}

reducerV2 = (acum,{libros}) => acum + libros


totalLibrosV2 = personas.reduce(reducerV2,0)
totalLibros = personas.reduce(reducer,0)
console.log(totalLibros)
console.log(totalLibrosV2)