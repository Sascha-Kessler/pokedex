function getPokemonCardTemplate(index){
   return `<div class="pokemon_card pokemon_type_${mainType}">
            <div>${pokemonResults[index].name}</div>
            <img src="${pokemonResults[index].sprites.front_default}" alt="">
            <div>Pokemon Stats</div>
        </div>`
}