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
                ${pokemonLoad[index].types.map(t =>`
                    <img src="${typeBadges[t.type.name]}" alt="${t.type.name} badge" class="type_badge">
                `).join("")}
              
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
            <img class="pokemon_overlay_img" src="${pokemonLoad[index].sprites.front_default}" alt="pokemon sprite">
            <div class="pokemon_weight_height">
            <div>WEIGHT: ${pokemonLoad[index].weight} KG</div>
            <div>HEIGHT: ${pokemonLoad[index].height} m</div>
            </div>
            <div>
                <button class="overlay_details_btn" onclick="toggleDNone('pokemon_stat_section')">Stats</button>
                <button class="overlay_details_btn" onclick="toggleDNone('pokemon_moves_section')">Moves</button>
            </div>
            <div class="pokemon_detail_infos" id="pokemon_stat_section" >
                <div>${pokemonLoad[index].stats[0].stat.name.toUpperCase()}: <br>${pokemonLoad[index].stats[0].base_stat}</div>
                <div>${pokemonLoad[index].stats[1].stat.name.toUpperCase()}: <br>${pokemonLoad[index].stats[1].base_stat}</div>
                <div>${pokemonLoad[index].stats[2].stat.name.toUpperCase()}: <br>${pokemonLoad[index].stats[2].base_stat}</div>
                <div>${pokemonLoad[index].stats[3].stat.name.toUpperCase()}: <br>${pokemonLoad[index].stats[3].base_stat}</div>
                <div>${pokemonLoad[index].stats[4].stat.name.toUpperCase()}: <br>${pokemonLoad[index].stats[4].base_stat}</div>
                <div>${pokemonLoad[index].stats[5].stat.name.toUpperCase()}: <br>${pokemonLoad[index].stats[5].base_stat}</div>
            </div>
            <div class="pokemon_detail_infos d_none" id="pokemon_moves_section" >
                <div>${pokemonLoad[index].moves[0].move.name.toUpperCase()}</div>
                <div>${pokemonLoad[index].moves[1].move.name.toUpperCase()}</div>
                <div>${pokemonLoad[index].moves[2].move.name.toUpperCase()}</div>
                <div>${pokemonLoad[index].moves[3].move.name.toUpperCase()}</div>
                <div>${pokemonLoad[index].moves[4].move.name.toUpperCase()}</div>
                <div>${pokemonLoad[index].moves[5].move.name.toUpperCase()}</div>
            </div>
            <div class="overlay_navigation_btn_container">
                <button id="previous_btn" class="poke_btn" onclick="navigateOverlayPokemon(${index}, -1)">Catch previous</button>
                <button id="next_btn" class="poke_btn" onclick="navigateOverlayPokemon(${index}, 1)">Catch next</button>
            </div>
        </div>`;
}
