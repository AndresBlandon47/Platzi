//El atributo data en html, permite que tengamos un elemento con ese nombre y valor

const btnEmpezar = document.getElementById('btnEmpezar')
const celeste    = document.getElementById('celeste')   
const violeta    = document.getElementById('violeta')   
const naranja    = document.getElementById('naranja')   
const verde      = document.getElementById('verde')

const ULTIMO_NIVEL = 6

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
		this.toggleBtnEmpezar()
		this.nivel = 1
		//Javascript permite que los atributos tengan el mismo valor que se le asigno arriba
		this.colores = {
			violeta,
			celeste,
			verde,
			naranja
		}
	}

	toggleBtnEmpezar() {
		if (btnEmpezar.classList.contains('hide')) {
			btnEmpezar.classList.remove('hide')
		} else {
			btnEmpezar.classList.add('hide')
		}
	}

	generarSecuencia(){
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4 ))
	}

	siguienteNivel(){
		this.subNivel = 0
		this.iluminarSecuencia(this.agregarEvento.bind(this))
		
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

	transformarColorNumero(color){
		switch (color){
			case'violeta':
				return 0 			
			case 'celeste':
				return 1			
			case 'verde':
				return 2			
			case 'naranja':
				return 3			
			
		}
	}

	iluminarSecuencia(callback){
		for(let i = 0; i < this.nivel;i++){
			const color = this.transformarNumeroColor(this.secuencia[i])
			setTimeout(() => this.iluminarColor(color),1000 * i)
			if (i === this.nivel-1){
				setTimeout(callback,1000 * i)
			}
		}
	}

	iluminarError(color){
		this.colores[color].classList.add('rojo')
	}

	apagarError(color){
		this.colores[color].classList.remove('rojo')
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

	eliminarEvento(){
		this.colores.violeta.removeEventListener('click',this.elegirColor)
		this.colores.celeste.removeEventListener('click',this.elegirColor)
		this.colores.verde.removeEventListener('click',this.elegirColor)
		this.colores.naranja.removeEventListener('click',this.elegirColor)
	}

	gano(){
		swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
		.then(() => this.toggleBtnEmpezar())
	}

	perdio(color){
		swal('Platzi', 'Eres un bruto', 'error')
		.then(() => {
			this.eliminarEvento()
			this.toggleBtnEmpezar()
			this.apagarError(color)
		})
	}

	siguienteNivelAlert(){
		swal('Platzi',`Bienvenido al nivel ${this.nivel}`,'info')
		.then(this.siguienteNivel.bind(this))
	}

	elegirColor(eve){
		const nombreColor = eve.target.id
		const numeroColor = this.transformarColorNumero(nombreColor)
		if(numeroColor === this.secuencia[this.subNivel]){
			this.subNivel++
			this.iluminarColor(nombreColor)
			if (this.subNivel === this.nivel){
				this.eliminarEvento()
				if (this.nivel === (ULTIMO_NIVEL)){
					this.gano();
				}else{
					this.nivel++
					//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
					//aqui es necesario el bind porque se pierde el This del objeto juego
					//setTimeout(this.siguienteNivel.bind(this), 1500)
					//Esta es otra forma de llamarlo por el setTimeOut, se eliminar el tener que usar el bind, pero es recomendable usar el anterior para mantener la integridad del This
					//setTimeout(() => this.siguienteNivel(), 1500)
					//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

					this.siguienteNivelAlert()
				}
			}
		}else{
			this.iluminarError(nombreColor)
			this.perdio(nombreColor)
		}
	}

}

function empezarJuego(){
	window.juego = new Juego()
}

