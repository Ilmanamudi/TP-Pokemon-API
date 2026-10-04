const API_URL = "https://pokeapi.co/api/v2/pokemon";


export const fetchAllPokemons = async (limit = 20) => {
  const response = await fetch(`${API_URL}?limit=${limit}`);
  if (!response.ok) throw new Error("Error al obtener la lista de Pokémon");
  
  const data = await response.json();

 
  const pokemonPromises = data.results.map(async (p) => {
    const res = await fetch(p.url);
    if (!res.ok) throw new Error("Error al obtener detalle del Pokémon");
    return res.json();
  });

  return await Promise.all(pokemonPromises);
};


export const fetchPokemonByIdOrName = async (query) => {
  const response = await fetch(`${API_URL}/${query}`);
  if (!response.ok) throw new Error("Pokémon no encontrado");
  
  return await response.json();
};