function getPokemonCardTemplate(index) {
  setPokemonCardColour(index);
  return `<div class="pokemon_card pokemon_type_${mainType}" onclick="openOverlayPokemonCards(${index})">
            <div class="pokemon_card_header">
                <div>#${pokemonLoad[index].id}</div>
                <div>${capitalizeFirstNameLetter(pokemonLoad[index].name)}</div>
            </div>
            <img src="${pokemonLoad[index].sprites.front_default}" alt="">
            <div>${capitalizeFirstNameLetter(
              pokemonLoad[index].types[0].type.name
            )}</div>
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
            <img src="${pokemonLoad[index].sprites.front_default}" alt="">
            <div class="overlay_navigation_btn_container">
                <button id="previous_btn" class="poke_btn" onclick="navigateOverlayPokemon(${index}, -1)">Catch previous</button>
                <button id="next_btn" class="poke_btn" onclick="navigateOverlayPokemon(${index}, 1)">Catch next</button>
            </div>
        </div>`;
}
