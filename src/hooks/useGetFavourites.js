import useStreamCollection from './useStreamCollection'

const useGetFavourites = () => {
    return useStreamCollection('favourites')
}

export default useGetFavourites