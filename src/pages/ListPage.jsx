import React from 'react'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import useStreamCollection from '../hooks/useStreamCollection'
import { useAuthContext } from '../contexts/AuthContext'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'



const ListPage = () => {
    const { currentUser } = useAuthContext()
    const { uid } = useParams()
    const {data, loading} = useStreamCollection(`users/${currentUser.uid}/lists/${uid}/pokemons`)

    const handleDelete = async pokemon => {
        const ref = doc(db, `users/${currentUser.uid}/lists/${uid}/pokemons`, pokemon.id)
        await deleteDoc(ref)
    }

    return (
        <>
            {data && (
                <>
                    {data.map((pokemon, index) => (
                        <div key={index}>
                            {pokemon.name}
                            <Button 
                                onClick={() => handleDelete(pokemon)} 
                                className="mt-2"
                            >Delete
                            </Button>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default ListPage