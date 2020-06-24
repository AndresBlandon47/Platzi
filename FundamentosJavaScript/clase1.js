var nombre = 'Luisa' , apellido = 'Castaño'

var nombreEnMayuscula = nombre.toUpperCase()
var apellidoEnMinuscula = apellido.toLowerCase()

var primeraLetra = nombre.charAt(0)
var cantidadLetras = nombre.length

var nombreCompleto = `${nombre.toUpperCase()} ${apellido}`

var str = nombre.substr(1, 3)
var ultimaLetra = nombre.charAt(nombre.length - 1)
console.log(nombreEnMayuscula)
console.log(apellidoEnMinuscula)

var precioVino = 200.3

//Se utliza esta función de math para tener mas precisión en el resultado, se recomienda multiplicar por 100 y luego dividirlo

var total = Math.round(precioVino*100 * 3)/100

//Para obtener la cantidad de decimales que necesite, en este caso 3 decimales
var totalDecimal = total.toFixed(3)
//Pasar lo anterior en numerico, porque con solo ese fixed queda en string
var total2Decimal = parseFloat(totalDecimal)

var pizza = 8
var personas = 3

var totalPorcion = parseFloat((pizza / personas).toFixed(3))

