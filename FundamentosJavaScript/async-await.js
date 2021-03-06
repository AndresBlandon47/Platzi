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


async function obtenerPokemones(){
	var listPokemon = [1, 5, 6 ,23, 25, 46, 36, 4, 8, 11]
	var infoPokemones = listPokemon.map((id)=>obtenerPokemon(id))
	try{
		var pokemones = await Promise.all(infoPokemones)
		pokemones.map(poke=>console.log(poke.name))
	}catch(id){
		onError(id)
	}
}

obtenerPokemones()