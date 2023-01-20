import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import { addDoc, doc, collection, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'
import { useState, useRef } from 'react'
import useStreamCollection from '../hooks/useStreamCollection';

const ProfilePage = () => {
    const { userEmail, currentUser } = useAuthContext()
    const {data, loading} = useStreamCollection(`users/${currentUser.uid}/lists`)
    const [inputField, setInputField] = useState(false)
    const [error, setError] = useState(null)
    const newListRef = useRef()

    const onSubmit = async (e) => {
        e.preventDefault()
        
        if (newListRef.current.value === "") {
            setError("You have to write something...")
            return
        } 

        try {
            await addDoc(collection( db, `users/${currentUser.uid}/lists`), {
                name: newListRef.current.value,
            }).then(async (credentials) => {
                const ref = doc(db, `users/${currentUser.uid}/lists`, credentials.id)
                updateDoc(ref, {uid: credentials.id})
            })
            setInputField(false)
        } catch (e) {
            setError("Could not create list")
            console.log(e.message)
        }

    }

    return (
        <>
            <Container className="py-3">
                <h3>Welcome {userEmail}</h3>

                {loading && <p>Loading list...</p>}

                {!loading && (
                    <>  
                        {data && (
                            <>
                                <h1>My lists</h1>
                                {data.map(list => (
                                    <a href={`/profile/${list.uid}`} key={list.id}>{list.name}</a>
                                ))}
                            </>
                        )} 

                        <h3>Create new list</h3>
                        <button onClick={() => setInputField(true)}>Create new list</button>

                        {inputField && (
                            <>
                                 <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>List Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter list name" ref={newListRef} />
                                    </Form.Group>
                                    <Button 
                                        variant="primary" 
                                        type="submit"
                                        onClick={onSubmit}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </>
                        )}
                    </>
                )}
            </Container>
        </>
    )
}

export default ProfilePage