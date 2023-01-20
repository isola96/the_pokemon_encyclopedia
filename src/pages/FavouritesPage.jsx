import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import useGetFavourites from '../hooks/useGetFavourites'

const FavouritesPage = () => {
    const { data: pokemons, loading } = useGetFavourites()

    const handleDelete = async pokemon => {
        const ref = doc(db, 'favourites', pokemon.id)
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
                                    <Button onClick={() => handleDelete(pokemon)} className="mt-2"
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