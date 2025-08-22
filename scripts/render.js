async function renderPokemonCards(startIndex = 0) {
  let pokemon = document.getElementById("pokemon_card");
  for (let index = startIndex; index < pokemonLoad.length; index++) {
    setPokemonCardColour(index);
    pokemon.innerHTML += getPokemonCardTemplate(index);
  }
  loadingSpinner();
}

 async function getAllPokemonDetails(limit = 20, offset) {
  let response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  let responseToJson = await response.json();
  let pokemonResults = responseToJson.results;
  let details = await Promise.all(pokemonResults.map(p => fetch (p.url).then(r => r.json())))
  console.log("details", details);

  return details;
} 
