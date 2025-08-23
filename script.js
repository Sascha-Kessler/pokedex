let pokemonLoad = [];
let mainType = [];
let offset = 0;
let pokemonTypes = [];
async function init(limit = 20, offset = 0) {
  loadingSpinner();
  await onloadFunc(limit, offset);
}

async function onloadFunc(limit = 20, offset = 0) {
  const startIndex = pokemonLoad.length;
  let details = await getAllPokemonDetails(limit, offset);
  pokemonLoad.push(...details);
  console.log("pokemonLoadArray:", pokemonLoad); //muss zum schluss entfernt werden!!!
  renderPokemonCards(startIndex);
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
  offset = offset + 20;
  await init((limit = 20), offset);
}

function loadingSpinner() {
  document.getElementById("wrapper").classList.toggle("d_none");
}

function capitalizeFirstNameLetter(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function filterByName(event) {
  let inputField = document.getElementById("search_field");
  let input = inputField.value;
  if (input.length >= 3) {
    filterListByName(event);
    document.getElementById("more_pokemon_btn").classList.add("d_none");
  } else {
    renderPokemonCards();
    loadingSpinner();
    document.getElementById("more_pokemon_btn").classList.remove("d_none");
  }
}

function filterListByName(event) {
  let query = event.target.value.trim().toLowerCase();
  let listItems = pokemonLoad
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.name.toLowerCase().includes(query));
  let container = document.getElementById("pokemon_card");
  container.innerHTML = listItems
    .map(({ i }) => getPokemonCardTemplate(i))
    .join("");
}
