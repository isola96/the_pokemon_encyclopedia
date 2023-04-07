import Container from 'react-bootstrap/Container'
import PokemonInfo from '../components/PokemonInfo'
import { useParams } from "react-router-dom"
import usePokemon from '../hooks/usePokemon'

const PokemonPage = () => {
    const { name } = useParams()
    const {data, isLoading, error, isError} = usePokemon(name)

    return (
        <>
            <Container>
            {isLoading && (<span>Loading pokemon...</span>)}

            {isError && (<span>An error occured {error.message}</span>)}
            
            {data && (
                <>
                    <PokemonInfo goddamnpokemon={data} />
                </>
            ) }
        </Container>
        </>
    )
}

export default PokemonPage