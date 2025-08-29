const axios = require('axios');

async function getPokemons(offSetPokemon) {
    try {
        let respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset" + offSetPokemon[0] + "&limit=" + offSetPokemon[1]);
        return respuesta.data['results'];
    } catch(e) {
        console.error(e);
    }
}

async function getPokemonData(url){
    try {
        let respuesta = await axios.get(url)
        return respuesta.data['abilities']
    } catch (error) {
        console.error(error)
    }
}

const offSetPokemon = [0,10]

getPokemons(offSetPokemon).then(pokemons => {
    console.log("Lista de Pokémon:");
    pokemons.forEach((pokemon) => {
        getPokemonData(pokemon.url).then(habilidades => {
            console.log(pokemon.name)
            console.log("Habilidades")
            habilidades.forEach(habilidad => {
                console.log("   " + habilidad.ability.name)
            })
        })
    });
});
