let pokemonName = document.querySelector(".pokemon-name");
let pokemonNumber = document.querySelector(".pokemon-number");
let form = document.getElementById("search-input");


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

const searchPokemon = (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Previne o comportamento padrão do Enter
        renderPokemon(form.value.toLowerCase()); // Busca o Pokémon com o valor do input
        form.value = ""; // Limpa o campo de input
    }
};

// Adiciona o evento "keydown" ao input
form.addEventListener("keydown", searchPokemon);
 
function prev(){
    let prev = pokemonNumber.innerHTML;
    prev = parseInt(prev); // Converte o valor para um número inteiro
    if (prev > 1) {
        prev--;
        renderPokemon(prev);
    }
}
function next(){
    let next = pokemonNumber.innerHTML;
    next = parseInt(next);
    if (next < 898){
        next++;
        renderPokemon(next);
    }
}