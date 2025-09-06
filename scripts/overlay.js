function openOverlayPokemonCards(index) {
  document.getElementById("overlay").classList.remove("d_none");
  let pokemonOverlay = document.getElementById("overlayCard");
  pokemonOverlay.innerHTML = getPokemonCardOverlayTemplate(index);
  document.body.classList.add("no-scroll");
  hideNavigateBtn(index);
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("d_none");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});

function navigateOverlayPokemon(index, step) {
  let newIndex = index + step;
  console.log(newIndex, index);
  document.getElementById("overlayCard").innerHTML =
    getPokemonCardOverlayTemplate(newIndex);
  hideNavigateBtn(newIndex);
}

function hideNavigateBtn(index) {
  let prevBtn = document.getElementById("previous_btn");
  let nextBtn = document.getElementById("next_btn");
  prevBtn.classList.toggle("d_none", index === 0); // class dnone und force index===0 wenn force true dann dnone hinzufügen, force false dnone entfernen
  nextBtn.classList.toggle("d_none", index === pokemonLoad.length - 1);
}

function toggleDNone(id) {
  document.getElementById('pokemon_stat_section').classList.add("d_none");
  document.getElementById('pokemon_moves_section').classList.add("d_none");
   document.getElementById(id).classList.toggle("d_none");
}