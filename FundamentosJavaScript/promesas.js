const API_URL = 'https://pokeapi.co/api/v2/'
const Pokemon_URL = 'pokemon/:id'
const opts = {crossDomanin: true}

obtenerPokemon = (id) => {

  return new Promise(function(resolve,reject){
		const pokemon_url = `${API_URL}${Pokemon_URL.replace(':id',id)}`
		$.get(pokemon_url,opts, (data)=>{
			resolve(data)
		})
		.fail(()=>reject(id))
	})
}

function onError(id){
	console.log(`Sucedio un error en el personaje ${id}`)
}

obtenerPokemon(25)
	.then(({name,id})=>{
		console.log(`El pokemon ${id} se llama ${name}`)
		return obtenerPokemon(1)
	})
	.then(({name,id})=>{
		console.log(`El pokemon ${id} se llama ${name}`)
		return obtenerPokemon(2)
	})
	.then(({name,id})=>{
		console.log(`El pokemon ${id} se llama ${name}`)
		return obtenerPokemon(3)
	})
	.then(({name,id})=>{
		console.log(`El pokemon ${id} se llama ${name}`)
		return obtenerPokemon(4)
	})
	.then(({name,id})=>{
		console.log(`El pokemon ${id} se llama ${name}`)
		return obtenerPokemon(5)
	})
	.then(({name,id})=>{
		console.log(`El pokemon ${id} se llama ${name}`)
	})
	.catch(onError)


