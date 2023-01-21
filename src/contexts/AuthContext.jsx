import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,
        onAuthStateChanged,
        } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
	const [userName, setUserName] = useState(null)
	const [userEmail, setUserEmail] = useState(null)
	const [loading, setLoading] = useState(true)

    const signup = async (email, password, name) => {
		await createUserWithEmailAndPassword(auth, email, password)

		const docRef = doc(db, 'users', auth.currentUser.uid) 
		await setDoc(docRef, {
			name,
			email,
		})
	}

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setUserName(user?.displayName)
			setUserEmail(user?.email)
			setLoading(false)
		})

		return unsubscribe
	}, [])

    const values = {
        signup,
        login,
        logout,
        currentUser,
        userName,
		userEmail,
    }

    return (
        <AuthContext.Provider value={values}>
            {loading ? (
                <div>Loading....</div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    )
}

export {
    AuthContextProvider as default,
    useAuthContext,
}