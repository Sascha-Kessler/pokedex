function getPokemonCardTemplate(index){
   return `<div class="pokemon_card pokemon_type_${mainType}">
            <div class="pokemon_card_header">
                <div>#${pokemonLoad[index].id}</div>
                <div>${capitalizeFirstLetter(pokemonLoad[index].name)}</div>
            </div>
            <img src="${pokemonLoad[index].sprites.front_default}" alt="">
            <div>Pokemon Stats</div>
        </div>`
}