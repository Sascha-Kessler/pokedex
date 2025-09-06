function getPokemonCardTemplate(index) {
  setPokemonCardColour(index);
  pokemonClass(index);
  return `<div class="pokemon_card pokemon_type_${mainType}" onclick="openOverlayPokemonCards(${index})">
            <div class="pokemon_card_header">
                <div>#${pokemonLoad[index].id}</div>
                <div>${capitalizeFirstNameLetter(pokemonLoad[index].name)}</div>
            </div>
            <img src="${pokemonLoad[index].sprites.front_default}" alt="pokemon sprite">
            <div>
              <div>${capitalizeFirstNameLetter(type[0])}</div>   
              <div>${capitalizeFirstNameLetter(type[1])}</div> 
            </div>
        </div>`;
}

function getPokemonCardOverlayTemplate(index) {
  setPokemonCardColour(index);
  return `<div class="pokemon_card pokemon_card_overlay pokemon_type_${mainType}">
            <div class="pokemon_card_header">
                <div>#${pokemonLoad[index].id}</div>
                <div id="pokemon_name">${capitalizeFirstNameLetter(
                  pokemonLoad[index].name
                )}</div>
            </div>
            <img src="${pokemonLoad[index].sprites.front_default}" alt="pokemon sprite">
            <div class="overlay_navigation_btn_container">
                <button id="previous_btn" class="poke_btn" onclick="navigateOverlayPokemon(${index}, -1)">Catch previous</button>
                <button id="next_btn" class="poke_btn" onclick="navigateOverlayPokemon(${index}, 1)">Catch next</button>
            </div>
        </div>`;
}
