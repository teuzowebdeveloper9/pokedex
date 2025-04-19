let pokemonName = document.querySelector(".pokemon-name");
let pokemonNumber = document.querySelector(".pokemon-number");
let form = document.getElementById("search-input");
let imgPokemon = document.getElementById('img');


const fetchPokemon = async (pokemon) => {

    const API_RESPONSE = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}` );

    const data = await API_RESPONSE.json();

    return data;

}
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name; 
    pokemonNumber.innerHTML = data.id;
    imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
};

const searchPokemon = (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        renderPokemon(form.value.toLowerCase()); 
        form.value = ""; 
    }
};


form.addEventListener("keydown", searchPokemon);
 
function prev(){
    let prev = pokemonNumber.innerHTML;
    prev = parseInt(prev);
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