import { useQuery } from "react-query"
import { getPokemon } from "../services/PokeApi" 

const usePokemon = (name) => {
    return useQuery(['pokemon', name], () => getPokemon(name))
}

export default usePokemon