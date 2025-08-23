function openOverlayPokemonCards(index) {
  document.getElementById('overlay').classList.remove('d_none');
  let pokemonOverlay = document.getElementById('overlayCard');
  pokemonOverlay.innerHTML = getPokemonCardOverlayTemplate(index);
  document.body.classList.add('no-scroll'); 
}

function closeOverlay() {
  document.getElementById('overlay').classList.add('d_none');
  document.body.classList.remove('no-scroll');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlay();
});

function navigateOverlayPokemon(index , count) {
    let newIndex = index + count;
    document.getElementById('overlayCard').innerHTML = getPokemonCardOverlayTemplate(newIndex)
}