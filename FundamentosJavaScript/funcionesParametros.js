class Persona{
	constructor(n,a,h){
		this.nombre = n
		this.apellido = a
		this.altura = h
	}

	saluda(fn){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
		if(fn){
			//de esta forma se activa la funcion que se pasa por parametro
			fn(this.nombre,this.apellido)
		}
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

	saluda(fn){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador `)
		if(fn){
			//de esta forma se activa la funcion que se pasa por parametro
			fn(this.nombre,this.apellido,this.profesion)
		}
	}
}

function responderSaludo(n,a,dev){
	console.log(`Buen día ${n} ${a}`)
	if(dev)
		console.log(`Ah mirá, no sabia que eras desarrollador/a`)
}

var andres = new Persona('Andres','Blandon',1.78)
var luisa = new Persona('Luisa','Castaño',1.75)
var raul = new Desarrollador('Raul','Higuera',1.9,'sistemas')

andres.saluda(responderSaludo)
luisa.saluda(responderSaludo)
raul.saluda(responderSaludo)