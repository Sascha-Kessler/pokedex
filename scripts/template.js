function getPokemonCardTemplate(index){
   return `<div class="pokemon_card pokemon_type_${mainType}">
            <div>${pokemonLoad[index].name}</div>
            <img src="${pokemonLoad[index].sprites.front_default}" alt="">
            <div>Pokemon Stats</div>
        </div>`
}