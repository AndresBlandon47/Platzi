var nombre = 'Andres', edad = 23

function imprimirEdad(n , e){
	console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
 mayusculaNombre(nombre)

//JavScript permite tener el nombre del atributo independiente de una variable global
//para acceder a la global se tiene que llamar a traves de window 

function mayusculaNombre(nombre){
  nombre = nombre.toUpperCase()
  console.log(nombre)
  console.log(window.nombre)
  
}