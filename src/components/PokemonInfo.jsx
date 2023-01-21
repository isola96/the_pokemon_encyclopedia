import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import React, { useState } from 'react';
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../firebase'
import ChoseList from './ChoseList'
import { useAuthContext } from '../contexts/AuthContext'
import useStreamCollection from '../hooks/useStreamCollection'

const PokemonInfo = ({ goddamnpokemon }) => {
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuthContext()
    const {data} = useStreamCollection(`users/${currentUser.uid}/favourites`)
    const [addToList, setAddToList] = useState(false)

    const onCreateFavourite = async () => {
        setLoading(true)

        await addDoc(collection(db, `users/${currentUser.uid}/favourites`), {
            name: goddamnpokemon.name,
        })
        setLoading(false)
    }

    return (
        <>
            {data && (
                <Container>
                    <Card className='mb-3'>
                        <Card.Header>
                            <Card.Img variant="top" src={goddamnpokemon.sprites.other["official-artwork"].front_default} className='w-50 p-3' />
                        </Card.Header>

                        <Card.Body>
                            <h2>{goddamnpokemon.name}</h2>

                            <div>
                                <div>{goddamnpokemon.types[0].type.name}</div>

                                {goddamnpokemon.types.length > 1 ? (
                                    <div>{goddamnpokemon.types[1].type.name}</div>
                                        ) : (
                                            <div></div>  
                                        )
                                }
                            </div>
                            
                            <div>Height: {goddamnpokemon.height}</div>

                            <div>Weight: {goddamnpokemon.weight}</div>
                            
                            {currentUser && (
                                <div>
                                    <Button
                                        variant="outline-dark"
                                        className='fave-button'
                                        onClick={onCreateFavourite}
                                        disabled={data.find(obj => {
                                            return obj.name === goddamnpokemon.name;
                                        })}
                                    >❤️
                                    </Button>

                                    <Button 
                                        variant="outline-dark"
                                        onClick={() => setAddToList(true)}
                                    >Add to list
                                    </Button>

                                    {addToList && (
                                        <ChoseList goddamnpokemon={goddamnpokemon} />
                                    )}
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Container>
            )}
        </>
    )
}

export default PokemonInfo  