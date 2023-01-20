import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'
import useGetList from '../hooks/useGetList'
import FavouritesPage from './FavouritesPage'

const ProfilePage = () => {
    const { userEmail } = useAuthContext()
    const { data: pokemons, loading } = useGetList()

    const handleDelete = async pokemon => {
        const ref = doc(db, 'my-list', pokemon.id)
        await deleteDoc(ref)
    }

    return (
        <>
            <Container className="py-3">
                <h3>Welcome {userEmail}</h3>

                <FavouritesPage />

                {loading && <p>Loading list...</p>}

                {!loading && (
                    <>  
                        <h3>List</h3>
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

                        <h3>Create new list</h3>
                    </>
                )}
            </Container>
        </>
    )
}

export default ProfilePage