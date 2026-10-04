const container = document.getElementById("pokemonContainer");
const spinner = document.getElementById("spinner");


const createCardHTML = (pokemon) => {
  const { id, name, sprites, types, weight, height} = pokemon;
  const typeList = types
    .map((t) => `<span class="badge bg-secondary me-1">${t.type.name}</span>`)
    .join("");
  
const imageUrl = sprites.other['official-artwork']?.front_default || sprites.front_default;
const weightKg = weight/10;
const heightMt = height/10;

  return `
  <div class="class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 ">
    <div class="card shadow h-100 ">
      <img src="${imageUrl}" class="card-img-top p-2 pokemon-img" alt="${name}">
      <div class="card-body text-center p-2">
        <h4 class="card-title text-capitalize">#${id} ${name}</h4>
        <p class="text-muted small mb-0">
            ${typeList} </br>
            <strong>Peso:</strong> ${weightKg} kg -
            <strong>Altura:</strong> ${heightMt} m
        </p>
      </div>
    </div>
  </div>
  `;
 
};


export const renderPokemonsList = (pokemons) => {
  container.innerHTML = "";
  container.classList.remove("justify-content-center"); 
  container.innerHTML = pokemons
    .map((p) => `<div class="col-md-3">${createCardHTML(p)}</div>`)
    .join("");
};


export const renderSinglePokemon = (pokemon) => {
  container.innerHTML = "";
 
  container.classList.add("justify-content-center"); 
  container.innerHTML = `
    <div class="col-md-4 single-card">
      ${createCardHTML(pokemon)}
    </div>
  `;
};


