var andres = {
  nombre: 'Andres',
  apellido: 'Blandon',
  edad: 23   
}

var luisa = {
  nombre: 'Luisa',
  apellido: 'Castaño',
  edad: 22   
}

// al poner en los parametros entre llaves, se puede acceder a un atributo en especifico del objeto
function imprimirNombre({nombre}){
  console.log(nombre.toUpperCase())
}

// otra forma de captar un atributo de un objeto es asi 
function imprimirNombreV2(persona){
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

function imprimirNombreEdad({nombre,edad}){
  console.log(`Holis, me llamo ${nombre} y tengo ${edad} años`)
}

function imprimirNombreEdadV2(persona){
  var {nombre} = persona
  var {edad} = persona
  var {apellido} = persona
  console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}

//Cuando se pasa el objeto por parametro se afecta globalmente, osea llame esa función en consola y afecto todo el objeto
function cumpleanos(persona){
  persona.edad +=1
}

//Cuando se retorna así, se crea un nuevo objeto
function cumpleanosV2(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}

imprimirNombre(andres)
imprimirNombre(luisa)

imprimirNombreV2(andres)
imprimirNombreV2(luisa)

imprimirNombreEdad(andres)
imprimirNombreEdad(luisa)

imprimirNombreEdadV2(andres)
imprimirNombreEdadV2(luisa)