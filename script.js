let pokemonResults = [];
let mainType = [];

async function init() {
  await onloadFunc();
}

async function onloadFunc() {
  let details = await getAllPokemonDetails();
  pokemonResults = details;
  console.log(pokemonResults);   //muss zum schluss entfernt werden!!!
  renderPokemonCards();
}

function renderPokemonCards(limit = 21) {
  let pokemon = document.getElementById("pokemon_card");
  pokemon.innerHTML = "";
  for (let index = 0; index < limit; index++) {
    setPokemonCardColour(index);
    pokemon.innerHTML += getPokemonCardTemplate(index);
  }
}

async function getAllPokemonDetails() {
  let response = await fetch(`${BASE_URL}`);
  let responseToJson = await response.json();
  let pokemonResults = responseToJson.results;
  let details = [];
  for (let index = 0; index < pokemonResults.length; index++) {
    let response = await fetch(pokemonResults[index].url);
    let responseToJson = await response.json();
    let pokemonDetails = responseToJson;
    details.push(pokemonDetails);
  }
  return details;
}

function setPokemonCardColour(index) {
  if (pokemonResults.length > 0) {
    mainType = pokemonResults[index].types[0].type.name;
  } else {
    mainType = "normal";
  }
  getTypeClass(mainType);
}

function getTypeClass(typeName) {
  return `pokemon_type_${typeName}`;
}
