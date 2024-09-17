import axios from "axios";

const httpClient = axios.create({ baseURL: "https://pokeapi.co/api/v2" });

export async function getPokemonById(id: number) {
  const res = await Promise.all([
    (await httpClient.get(`/pokemon/${id}`)).data,
    (await httpClient.get(`/pokemon-species/${id}`)).data,
  ]);

  const data = {
    ...res[0],
    color: res[1].color.name,
  };

  return data;
}

export async function getListPokemon() {
  const { data } = await httpClient.get("pokemon/?limit=100");
  const results = data.results;

  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: { name: string; url: string }) => {
      const { data } = await axios.get(pokemon.url);

      return {
        id: data.id,
        name: data.name,
        stats: data.stats,
        sprites: data.sprites,
        types: data.types,
      };
    })
  );

  return payloadPokemons;
}
