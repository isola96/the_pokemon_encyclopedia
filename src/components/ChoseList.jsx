import React from 'react'
import useStreamCollection from '../hooks/useStreamCollection'
import { useAuthContext } from '../contexts/AuthContext'
import { addDoc, doc, collection, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase'

const ChoseList = ({ goddamnpokemon }) => {
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuthContext()
    const {data, loading: isLoading} = useStreamCollection(`users/${currentUser.uid}/lists`)

    const onChosenList = async (list) => {
        setLoading(true)
        
        // store pokemon in Firestore
        await addDoc(collection(db, `users/${currentUser.uid}/lists/${list.uid}/pokemons`), {
            name: goddamnpokemon.name,
        }).then(async (credentials) => {
            const ref = doc(db, `users/${currentUser.uid}/lists/${list.uid}/pokemons`, credentials.id)
            updateDoc(ref, {uid: credentials.id})
        })
        setLoading(false)
    }

    return (
        <>
            {isLoading && <p>Loading..</p>}

            {data && (
                <>
                    <h1>My lists</h1>
                    {data.map(list => (
                        <div onClick={() => onChosenList(list)}>{list.name}</div>
                    ))}
                </>
            )} 
        </>
    )
}

export default ChoseList