const API_URL = 'https://pokeapi.co/api/v2/'
const Pokemon_URL = 'pokemon/:id'
const opts = {crossDomanin: true}

obtenerPokemon = (id,callback) => {
	const pokemon_url = `${API_URL}${Pokemon_URL.replace(':id',id)}`
	$.get(pokemon_url,opts,callback) 
}

obtenerPokemon(1,(pokemon)=>{
	console.log(`Hola, yo soy ${pokemon.name}`)

	obtenerPokemon(2,(pokemon)=>{
		console.log(`Hola, yo soy ${pokemon.name}`)

		obtenerPokemon(3,(pokemon)=>{
			console.log(`Hola, yo soy ${pokemon.name}`)

			obtenerPokemon(25,(pokemon)=>{
				console.log(`Hola, yo soy ${pokemon.name}`)
			})
		})
	})
})


