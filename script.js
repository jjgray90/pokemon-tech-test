import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

console.log(cardContainer);

const getPokemon = () => {
  pokemonArray.map((pokemon) => {
    cardContainer.innerHTML += `
        <div class="card">
            <img src="${pokemon.sprite}">
            <div class="card__content">
                <h2 class="card__heading">${pokemon.name}</h2>
                <p class="card__text">${pokemon.name} (#${
      pokemon.id
    }) is a ${pokemon.types.join(" & ")} type pokemon.</p>
            </div>
        </div>
        `;
  });
};

getPokemon();
