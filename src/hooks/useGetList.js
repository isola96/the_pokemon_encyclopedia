import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from 'react'

const useGetList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
		const getSnapshot = async () => {
            setLoading(true)
			const ref = collection(db, 'my-list')
			const snapshot = await getDocs(ref)

            const docs = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),  
				}
			})

			setData(docs)
			setLoading(false)
		}
		getSnapshot()
	}, [])

    return {
        data, 
        loading
    }
}

export default useGetList