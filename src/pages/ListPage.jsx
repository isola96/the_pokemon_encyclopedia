import React from 'react'
import { useParams } from 'react-router-dom'
import useStreamCollection from '../hooks/useStreamCollection'
import { useAuthContext } from '../contexts/AuthContext'

const ListPage = () => {
    const { currentUser } = useAuthContext()
    const { uid } = useParams()
    const {data, loading} = useStreamCollection(`users/${currentUser.uid}/lists/${uid}/pokemons`)

    return (
        <>
            {data && (
                <>
                    {data.map((pokemon, index) => (
                        <div key={index}>{pokemon.name}</div>
                    ))}
                </>
            )}
        </>
    )
}

export default ListPage