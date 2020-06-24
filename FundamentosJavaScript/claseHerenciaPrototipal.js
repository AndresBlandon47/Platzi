function heredaDe(prototipoHijo, prototipoPadre){
	var fn = function (){}
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(n,a,h){
	this.nombre = n
	this.apellido = a
	this.altura = h
}

//Para agregar una función en especifico para el objeto de persona se puede usar la palabra prototype
Persona.prototype.saluda = function(){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function (){
	const ALTO = 1.8
	if(this.altura > ALTO)
		console.log(`${this.nombre} es una persona alta`)
	else
		console.log(`${this.nombre} es una persona baja`)

}


function Desarrollador (n,a){
	this.nombre = n
	this.apellido = a
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saluda = function (){
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador `)
}



//la palabra this, en funciones normales hace referencia a los objeto que se esta utlizando



var andres = new Persona('Andres','Blandon',1.78)
var luisa = new Persona('Luisa','Castaño',1.75)

