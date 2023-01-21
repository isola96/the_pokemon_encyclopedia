import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import { addDoc, doc, collection, updateDoc, deleteDoc } from 'firebase/firestore'
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

    const handleDelete = async list => {
        const ref = doc(db, `users/${currentUser.uid}/lists`, list.id)
        await deleteDoc(ref)
    }

    return (
        <>
            <Container className="py-3">
                <h2>Welcome {userEmail}</h2>

                {loading && <p>Loading list...</p>}

                {!loading && (
                    <>  
                        {data && (
                            <>
                                <h3>My lists</h3>
                                {data.map(list => (
                                    <div key={list.id}>
                                        <a href={`/profile/${list.uid}`}>{list.name}</a>
                                        <Button 
                                            onClick={() => handleDelete(list)} 
                                            className="mt-2"
                                        >Delete
                                        </Button>
                                    </div>
                                ))}
                            </>
                        )} 

                        <h3>Create new list</h3>
                        <Button 
                            variant='outline-dark'
                            onClick={() => setInputField(true)}
                        >Create new list
                        </Button>

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
                                    >Submit
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