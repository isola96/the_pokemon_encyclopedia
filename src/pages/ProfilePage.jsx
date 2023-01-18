import { useAuthContext } from '../contexts/AuthContext'

const ProfilePage = () => {
    const { userEmail } = useAuthContext()

    return (
        <>
            <h1>Welcome {userEmail}</h1>
        </>
    )
}

export default ProfilePage