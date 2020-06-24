class Persona{
	constructor(n,a,h){
		this.nombre = n
		this.apellido = a
		this.altura = h
	}

	saluda(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
	}

	esAlto(){
		const ALTO = 1.8
		if(this.altura > ALTO)
			console.log(`${this.nombre} es una persona alta`)
		else
			console.log(`${this.nombre} es una persona baja`)
	}
}

class Desarrollador extends Persona{
	constructor(n,a,h,p){
		super(n,a,h)
		this.profesion = p
	}

	saluda(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador `)
	}
}

var andres = new Persona('Andres','Blandon',1.78)
var luisa = new Persona('Luisa','Castaño',1.75)

