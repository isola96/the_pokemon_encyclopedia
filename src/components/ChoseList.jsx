import React from 'react'
import { addDoc, doc, collection, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase'
import useStreamCollection from '../hooks/useStreamCollection'
import { useAuthContext } from '../contexts/AuthContext'

const ChoseList = ({ goddamnpokemon }) => {
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuthContext()
    const {data, loading: isLoading} = useStreamCollection(`users/${currentUser.uid}/lists`)

    const onChosenList = async (list) => {
        setLoading(true)
        await addDoc(collection(db, `users/${currentUser.uid}/lists/${list.uid}/pokemons`), {
            name: goddamnpokemon.name,
        }).then(async (credentials) => {
            const ref = doc(db, `users/${currentUser.uid}/lists/${list.uid}/pokemons`, credentials.id)
            updateDoc(ref, {uid: credentials.id})
        })
        setLoading(false)
        alert("Successfully added to list")
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}

            {data.length > 0 ? (
                <>
                    <h3>My lists</h3>
                    {data.map((list, index) => (
                        <div 
                            className='clickingOnList' 
                            key={index} 
                            onClick={() => onChosenList(list)}
                        >{list.name}
                        </div>
                    ))}
                </>
            ) : (
                <div>You have no lists 😞</div>
            )} 
        </>
    )
}

export default ChoseList