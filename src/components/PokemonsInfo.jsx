import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getAllPokemons } from '../services/PokeApi'

const PokemonsInfo = () => {
    const {data, isLoading, error, isError} = useQuery(['pokemons'], getAllPokemons)

    return (
        <Container>
            <h1>This is a list of all Pokémons</h1>

            {isLoading && (<p>Loading Pokémons...</p>)}

            {isError && (<p>ERROR {error.message}</p>)}

            {data && (
                <ul>
                    {data.results.map(i => (
                        <li key={i.url}>{i.name}</li>
                    ))}
                </ul>
            )}
        </Container>
    )
}

export default PokemonsInfo