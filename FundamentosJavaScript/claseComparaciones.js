var x = 4, y = 6

var andres = {
  nombre:'Andres'
}

//Al hacer esa así, en la comparacion de andres === copia2 da true
//porque copia apunta al mismo lugar de memoria en donde esta andres
var copia2 = andres


//En cambio asi, en la comparación de andres === copia da false
//Porque a pesar de que son iguales, estan en lugares distintos de la memoria
var copia = {
  nombre:'Andres'
}

var otraPersona = {
  ...andres
}
