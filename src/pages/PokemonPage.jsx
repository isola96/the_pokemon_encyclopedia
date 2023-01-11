import Container from 'react-bootstrap/Container'
import PokemonInfo from '../components/PokemonInfo'
import { useParams } from "react-router-dom"
import usePokemon from '../hooks/getPokemon'

const PokemonPage = () => {
    const { name } = useParams()
    const {data, isLoading, error, isError} = usePokemon(name)

    return (
        <>
            <Container>
            {isLoading && (<p>Loading pokemon...</p>)}

            {isError && (<p>An error occured {error.message}</p>)}
            
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