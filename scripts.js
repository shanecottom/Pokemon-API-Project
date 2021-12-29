const baseURL = "https://pokeapi.co/api/v2/pokemon/"
//Shift+Alt+F formats entire document in HTML, JavaScript, C#
let buttonElement = document.getElementById("pokemon-choice");
let dataElement = document.getElementById("focus-box");
let pokedexElement = document.getElementById("pokedex");
let choice = document.getElementById("user-input");

buttonElement.addEventListener("click", (e) => fetchPokemon(e, choice.value))

function fetchPokemon(e, choice) {
    e.preventDefault();
    console.log(choice);
    fetch(`${baseURL}${choice.toLowerCase()}`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);

            displayPokemonData(jsonData)
        })
}

function displayPokemonData(jsonData) {
    console.log(jsonData);
    let pokemonName = jsonData.name;
    let pokemonID = jsonData.id;
    let sprite = jsonData.sprites.front_default;

    console.log(pokemonName);
    console.log(pokemonID);
    console.log(sprite);
    pokedexElement.innerHTML = "";
    pokedexElement.classList.remove("invisible");

    let pokemonNameElement = document.createElement("p");
    let pokmeonIDElement = document.createElement("p");
    let spriteElement = document.createElement("img");

    let pokemonDisplay = document.createElement("div");
    pokemonDisplay.id = "pokemonCard";

    pokemonNameElement.innerText = `Pokemon Name: ${pokemonName}`;
    pokmeonIDElement.innerText = `ID Number: ${pokemonID}`;
    spriteElement.src = sprite;

    pokemonDisplay.appendChild(pokemonNameElement);
    pokemonDisplay.appendChild(pokmeonIDElement);
    pokemonDisplay.appendChild(spriteElement);

    pokedexElement.appendChild(pokemonDisplay);
}