/*Hasta aqui el juego prende todas las luces y permite señalas una parte con el
click, es importante el bind porque permite que el this sea siendo la clase
*/
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste    = document.getElementById('celeste')   
const violeta    = document.getElementById('violeta')   
const naranja    = document.getElementById('naranja')   
const verde      = document.getElementById('verde') 
class Juego{
  constructor(){
		this.inicializar()
		this.generarSecuencia()
		this.siguienteNivel()
	}

	inicializar(){
		/*Se coloca desde aca el bind, para no repetirlo en esa funcion elegir color.
		y lo que hace es que el this siga siendo el del juego y no lo robe ese objeto */
		this.elegirColor = this.elegirColor.bind(this)
		btnEmpezar.classList.add('hide')
		this.nivel = 1
		//Javascript permite que los atributos tengan el mismo valor que se le asigno arriba
		this.colores = {
			violeta,
			celeste,
			verde,
			naranja
		}
	}

	generarSecuencia(){
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4 ))
	}

	siguienteNivel(){
		this.iluminarSecuencia()
		this.agregarEvento()
	}

	transformarNumeroColor(num){
		switch (num){
			case 0:
				return 'violeta'
			case 1:
				return 'celeste'
			case 2:
				return 'verde'
			case 3:
				return 'naranja'			
		}
	}

	iluminarSecuencia(){
		for(let i = 0; i < this.nivel;i++){
			const color = this.transformarNumeroColor(this.secuencia[i])
			setTimeout(() => this.iluminarColor(color),1000 * i)
		}
	}

	iluminarColor(color){
		this.colores[color].classList.add('light')
		setTimeout(() => this.apagarColor(color),350)
	}

	apagarColor(color){	
		this.colores[color].classList.remove('light')
	}

	agregarEvento(){
		this.colores.violeta.addEventListener('click',this.elegirColor)
		this.colores.celeste.addEventListener('click',this.elegirColor)
		this.colores.verde.addEventListener('click',this.elegirColor)
		this.colores.naranja.addEventListener('click',this.elegirColor)
	}

	elegirColor(){
		console.log(this)
	}

}

function empezarJuego(){
	window.juego = new Juego()
}

