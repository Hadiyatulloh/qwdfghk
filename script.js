// import pokemons from "./pokemons.js"
// const pokemonContainer = document.getElementById("pokemonContainer");
// const searchInput = document.getElementById("searchInput");
// const filterType = document.getElementById("filterType");
// const sortBy = document.getElementById("sortBy");
// const searchButton = document.getElementById("searchButton");

// function generator(pokemon) {
//     pokemonContainer.innerHTML = '';
//     pokemon.forEach(pokemon => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//             <h3>${pokemon.name}</h3>
//             <img src="${pokemon.img}" alt="">
//             <p>${pokemon.type}</p>
//             <p>${pokemon.weight}</p>
//         `;
//         pokemonContainer.appendChild(card)
//     });
// }

// function filter() {
//     const filteredPokemons = pokemons;
//     if (sortBy.value === 'alphabeticalAsc') {
//         filteredPokemons.sort((a, b) => a.name.localeCompare(b.name))
//     } else if (sortBy.value === 'alphabeticalDesc') {
//         filteredPokemons.sort((a, b) => b.name.localeCompare(a.name))
//     } else if (sortBy.value === 'weightAsc') {
//         filteredPokemons.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight))
//     } else if (sortBy.value === 'weightDesc') {
//         filteredPokemons.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight))
//     }
//     generator(filteredPokemons)
// }

// function filterByType() {
//     const selectType = filterType.value.toLowerCase();
//     let filteredPokemons;
//     if (selectType === "all") {
//         filteredPokemons = pokemons;
//     } else {
//         filteredPokemons = pokemons.filter(pokemon =>
//             pokemon.type.includes(filterType.value));
//     }
//     generator(filteredPokemons);
// }

// generator(pokemons);

// filterType.addEventListener('change', filterByType);
// sortBy.addEventListener('change', filter)

import pokemons from "./pokemons.js";

const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");
const sortBy = document.getElementById("sortBy");
const pokemonContainer = document.getElementById("pokemonContainer");

function renderPokemons(pokemonList) {
    pokemonContainer.innerHTML = "";

    pokemonList.forEach((pokemon) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <p>${pokemon.type.join(" ")}</p>
            <p>${pokemon.weight} </p>
        `;
        pokemonContainer.appendChild(card);
    });
}

function searchPokemons() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase() === searchValue
    );
    renderPokemons(filteredPokemons);
}

function filterByType() {
    const selectType = filterType.value.toLowerCase();
    let filteredPokemons;
    if (selectType === "all") {
        filteredPokemons = pokemons;
    } else {
        filteredPokemons = pokemons.filter(pokemon =>
            pokemon.type.includes(filterType.value));
    }
    renderPokemons(filteredPokemons);
}

function filterAndSort() {
    let filteredPokemons = [...pokemons];
    if (sortBy.value === 'alphabeticalAsc') {
        filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy.value === 'alphabeticalDesc') {
        filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy.value === 'weightAsc') {
        filteredPokemons.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
    } else if (sortBy.value === 'weightDesc') {
        filteredPokemons.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
    }
    renderPokemons(filteredPokemons);
}

searchInput.addEventListener("input", searchPokemons);
filterType.addEventListener("change", filterByType);
sortBy.addEventListener("change", filterAndSort);

renderPokemons(pokemons);