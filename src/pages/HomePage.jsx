import React from 'react'
import PokemonsInfo from '../components/PokemonsInfo'
import Search from '../components/Search'
import { getAllPokemonsLimit } from '../services/PokeApi'
import { useQuery } from 'react-query'


const HomePage = () => {
    const {data, isLoading, error, isError} = useQuery(['pokemonsSearch'], () => {
        return getAllPokemonsLimit(1279)
    })

    console.log(data.results)

    return (
        <>
            <h1>Gotta catch 'em all</h1>
            <Search details={data.results} /> 
            <PokemonsInfo />
        </>
    )
}

export default HomePage