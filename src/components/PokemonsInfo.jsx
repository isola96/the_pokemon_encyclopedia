import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
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
                    {data.results.map(pokemon => (
                        <li key={pokemon.url}>
                            {pokemon.name}
                            <Button
                                as={Link}
                                to={`/pokemon/${pokemon.name}`}
                                >Click me
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    )
}

export default PokemonsInfo