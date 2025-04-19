const fetchPokemon = async (pokemon) => {

    const API_RESPONSE = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` )

    console.log(API_RESPONSE)

}

fetchPokemon('55');