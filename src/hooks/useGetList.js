import useStreamCollection from './useStreamCollection'

const useGetList = () => {
    return useStreamCollection('my-list')
}

export default useGetList