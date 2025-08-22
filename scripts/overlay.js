function removeOverlayPokemonCards(index) {
  document.getElementById('overlay').classList.remove('d_none');
  let pokemonOverlay = document.getElementById('overlayCard');
  pokemonOverlay.innerHTML = getPokemonCardOverlayTemplate(index); 
}

function closeOverlay() {
  document.getElementById('overlay').classList.add('d_none');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlay();
});