
let pokemonLoad = []
let mainType = [];
let offset = 0;
async function init() {
  await onloadFunc();
}

async function onloadFunc(limit, offset) {
  const startIndex = pokemonLoad.length;
  let details = await getAllPokemonDetails(limit = 20, offset);
  
  pokemonLoad.push(...details)
  console.log(pokemonLoad);   //muss zum schluss entfernt werden!!!
  renderPokemonCards(startIndex);
}

async function renderPokemonCards(startIndex = 0) {
  let pokemon = document.getElementById("pokemon_card");
  
  for (let index = startIndex; index < pokemonLoad.length; index++) {
    setPokemonCardColour(index);
    pokemon.innerHTML += getPokemonCardTemplate(index);
  }
}

async function getAllPokemonDetails(limit = 20, offset) {
  let response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
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
  if (pokemonLoad.length > 0) {
    mainType = pokemonLoad[index].types[0].type.name;
  } else {
    mainType = "normal";
  }
  getTypeClass(mainType);
}

function getTypeClass(typeName) {
  return `pokemon_type_${typeName}`;
}

async function loadMorePokemon() {
  offset = offset+20
await  onloadFunc(limit = 20, offset);
}
