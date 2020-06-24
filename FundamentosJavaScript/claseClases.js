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

//La palabra this, en funciones arrows hace referencia a los objetos que estan en window, fuera del objeto

//la palabra this, en funciones normales hace referencia a los objeto que se esta utlizando


//La palabra new, hace que se cree un nuevo objeto, y se le asigna el prototipo 
var andres = new Persona('Andres','Blandon',1.78)
var luisa = new Persona('Luisa','Castaño',1.75)
var natalia = new Persona('Natalia','Blandon',1.85)
var felipe = new Persona('Felipe','Agudelo',1.87)