import { createContext, useContext } from 'react'
import { auth, db } from '../firebase'
import { 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut 
        } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const signup = async (email, password, name) => {
		await createUserWithEmailAndPassword(auth, email, password)

        // create user document
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

    const values = {
        signup,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContextProvider as default,
    useAuthContext,
}