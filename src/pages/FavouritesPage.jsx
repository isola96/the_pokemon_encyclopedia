import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import useStreamCollection from '../hooks/useStreamCollection'
import { useAuthContext } from '../contexts/AuthContext'

const FavouritesPage = () => {
    const { currentUser } = useAuthContext()
    const { data: pokemons, loading } = useStreamCollection(`users/${currentUser.uid}/favourites`)

    const handleDelete = async pokemon => {
        const ref = doc(db, `users/${currentUser.uid}/favourites`, pokemon.id)
        await deleteDoc(ref)
    }

    return (
        <>
            <Container className="py-3">
                {loading && <p>Loading list...</p>}

                {!loading && (
                    <>
                        <h3>Favourites</h3>
                        <ListGroup>
                            {pokemons.map((pokemon, index) => (
                                <ListGroup.Item key={index}>
                                    {pokemon.name}
                                    <Button 
                                        variant='outline-dark'
                                        onClick={() => handleDelete(pokemon)} 
                                        className="mt-2"
                                    >Delete
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </>
                )}
            </Container>
        </>
    )
}

export default FavouritesPage