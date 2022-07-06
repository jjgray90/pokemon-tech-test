import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const typesFilter = document.querySelector("#type");
const nameSearch = document.querySelector("#name-search");

const getPokemon = (array) => {
  array.forEach((pokemon) => {
    let pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

    cardContainer.innerHTML += `
        <div class="card">
            <img src="${pokemon.sprite}">
            <div class="card__content">
                <h2 class="card__heading">${pokemonName}</h2>
                <p class="card__text">${pokemonName} (#${
      pokemon.id
    }) is a ${pokemon.types.join(" & ")} type pokemon.</p>
            </div>
        </div>
        `;
  });
};

const getTypes = () => {
  const allTypes = [];
  pokemonArray.forEach((pokemon) =>
    pokemon.types.forEach((type) => allTypes.push(type))
  );
  const pokeTypes = [...new Set(allTypes)].sort();
  pokeTypes.forEach((type) => {
    typesFilter.innerHTML += `<option value=${type}>${type}</option>`;
  });
};

const filterPokes = (filterType, key, resetValue) => {
  cardContainer.innerHTML = "";
  const lowerCaseFilterType = filterType.value.toLowerCase();

  if (lowerCaseFilterType === resetValue) {
    getPokemon(pokemonArray);
  }
  let filterArray = pokemonArray.filter((pokemon) => {
    return pokemon[key].includes(lowerCaseFilterType);
  });

  getPokemon(filterArray);
};

getTypes();
getPokemon(pokemonArray);

typesFilter.addEventListener("change", () =>
  filterPokes(typesFilter, `types`, `all`)
);
nameSearch.addEventListener("change", () =>
  filterPokes(nameSearch, `name`, "")
);
