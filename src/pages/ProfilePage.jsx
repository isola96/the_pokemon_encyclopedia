import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { useAuthContext } from '../contexts/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase'

const ProfilePage = () => {
    const { userEmail } = useAuthContext()
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
		const getSnapshot = async () => {
            setLoading(true)
			// get reference to collection 'my-list'
			const ref = collection(db, 'my-list')
			const snapshot = await getDocs(ref)

            const data = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),  // name
				}
			})

			setPokemons(data)
			setLoading(false)
		}
		getSnapshot()
	}, [])

    return (
        <>
            <Container className="py-3">
                <h3>Welcome {userEmail}</h3>

                {loading && (<p>Loading data...</p>)}

                {!loading &&
                    <ListGroup>
                        {pokemons.map((pokemon, index) => (
                            <ListGroup.Item key={index}>
                                {pokemon.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
            </Container>
        </>
    )
}

export default ProfilePage