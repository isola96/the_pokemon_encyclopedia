import React, { useEffect, useState } from 'react'
import PokemonsInfo from '../components/PokemonsInfo'
import Search from '../components/Search'
import { getAllPokemonsLimit } from '../services/PokeApi'
import { useQuery } from 'react-query'


const HomePage = () => {
    const {data} = useQuery(['pokemonsSearch'], () => {
        return getAllPokemonsLimit(1279)
    })

    console.log(data?.results)

    return (
        <>
            <h1>Gotta catch 'em all</h1>

            {data && (
                <Search details={data?.results} /> 
            )}
            
            <PokemonsInfo />
        </>
    )
}

export default HomePage