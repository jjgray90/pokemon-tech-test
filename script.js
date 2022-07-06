import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const typeFilter = document.querySelector("#type");

const getPokemon = (array) => {
  array.forEach((pokemon) => {
    cardContainer.innerHTML += `
        <div class="card">
            <img src="${pokemon.sprite}">
            <div class="card__content">
                <h2 class="card__heading">${
                  pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
                }</h2>
                <p class="card__text">${
                  pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
                } (#${pokemon.id}) is a ${pokemon.types.join(
      " & "
    )} type pokemon.</p>
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
    typeFilter.innerHTML += `<option value=${type}>${type}</option>`;
  });

  console.log(pokeTypes);
};

const filterPokes = () => {
  cardContainer.innerHTML = "";

  console.log(typeFilter.value);
  if (typeFilter.value === "all") {
    getPokemon(pokemonArray);
  }
  let filterArray = pokemonArray.filter((pokemon) => {
    return pokemon.types.includes(typeFilter.value);
  });

  getPokemon(filterArray);
};

getTypes();
getPokemon(pokemonArray);

typeFilter.addEventListener("change", filterPokes);
