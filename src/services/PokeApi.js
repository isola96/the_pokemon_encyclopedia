/** 
 * The RESTful Pokémon API
 * 
 * All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API.
 * https://pokeapi.co/docs/v2
 * 
 */

import axios from "axios";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

// GET - Get all pokémons 
export const getAllPokemons = (offset) => {
    return get(`/pokemon/?offset=${offset}`)
}

// GET - Get all pokémons with limit 
export const getAllPokemonsLimit = (limit) => {
    return get(`/pokemon/?limit=${limit}`)
}

// GET - Get a single pokémon
export const getPokemon = (name) => {
    return get(`/pokemon/${name}`)
}