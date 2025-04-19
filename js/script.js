let pokemonName = document.querySelector(".pokemon-name");
let pokemonNumber = document.querySelector(".pokemon-number");


const fetchPokemon = async (pokemon) => {

    const API_RESPONSE = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` );

    const data = await API_RESPONSE.json();

    return data;

}
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name; 
    pokemonNumber.innerHTML = data.id; 
};

