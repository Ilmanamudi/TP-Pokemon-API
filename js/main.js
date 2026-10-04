import { fetchAllPokemons, fetchPokemonByIdOrName } from "./services/pokemonService.js";
import { renderPokemonsList, renderSinglePokemon,  initThemeToggle } from "./helpers/ui.js";
import {showAlert} from "./helpers/sweetAlert.js";
import {showSpinner, hideSpinner} from "./helpers/spinner.js";

const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const input = document.getElementById("pokemonInput");

const loadInitialData = async () => {
  try {
    showSpinner();
    const pokemons = await fetchAllPokemons(52);
    renderPokemonsList(pokemons);
  } catch (error) {
    showAlert("Error", "No se pudieron cargar los Pokémon.", "error");
  } finally {
    hideSpinner();
  }
};

const handleSearch = async () => {
  const query = input.value.trim().toLowerCase();

  if (!query) {
    showAlert("Atención", "Debes ingresar un nombre o ID antes de buscar.", "warning");
    return;
  }

  try {
    showSpinner();
    const pokemon = await fetchPokemonByIdOrName(query);
    renderSinglePokemon(pokemon);
  } catch (error) {
    showAlert("Error", `El Pokémon "${query}" no existe.`, "error");
  } finally {
    hideSpinner();
  }
};

const handleReset = () => {
  input.value = ""; 
  loadInitialData(); 
};

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('year').textContent = new Date().getFullYear();
    initThemeToggle();
    loadInitialData();

    searchBtn.addEventListener("click", handleSearch);
    resetBtn.addEventListener("click", handleReset);
    
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSearch();
    });
});