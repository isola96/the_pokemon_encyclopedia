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

        // store pokemon in Firestore
        await addDoc(collection(db, `users/${currentUser.uid}/favourites`), {
            name: goddamnpokemon.name,
        })
        setLoading(false)
    }

    return (
        <>
        {data && (
            <Container>
                <Row>   
                    <Col lg={3} md={4} sm={6} key={goddamnpokemon.id}>
                        <Card className='mb-3'>
                            <Card.Header>
                                <Card.Img variant="top" src={goddamnpokemon.sprites.other["official-artwork"].front_default} />
                            </Card.Header>

                            <Card.Body>
                                <Card.Title>{goddamnpokemon.name}</Card.Title>

                                <Card.Text>
                                    <p>{goddamnpokemon.types[0].type.name}</p>
                                    {goddamnpokemon.types.length > 1 ? (
                                        <p>{goddamnpokemon.types[1].type.name}</p>
                                            ) : (
                                                <p></p>
                                            )
                                    }
                                    <p>Height {goddamnpokemon.height}</p>
                                    <p>Weight {goddamnpokemon.weight}</p>
                                </Card.Text>
                                {currentUser && (
                                    <div>
                                        <button 
                                            className='fave-button'
                                            onClick={onCreateFavourite}
                                            disabled={data.find(obj => {
                                                return obj.name === goddamnpokemon.name;
                                            })}
                                        >❤️
                                        </button>

                                        <button 
                                            onClick={() => setAddToList(true)}
                                        >Add to list
                                        </button>

                                        {addToList && (
                                            <ChoseList goddamnpokemon={goddamnpokemon} />
                                        )}
                                    </div>
                                )}
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )}
            
        </>
    )
}

export default PokemonInfo  