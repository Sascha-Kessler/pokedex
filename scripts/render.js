function renderPokemonCards(startIndex = 0) {
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
  let details = await Promise.all(
    pokemonResults.map(p => fetch (p.url).then(r =>{
    if (!r.ok) throw new Error (`HTTP ${r.status} for ${p.url}`);
    return  r.json();
  }).catch(error => {console.warn('Detail failed:', p.url, error);
      return null;})));
  console.log("details", details);
  details = details.filter(Boolean);
  return details;
} 
