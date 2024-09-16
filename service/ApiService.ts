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
