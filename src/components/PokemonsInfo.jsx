import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAllPokemons } from '../services/PokeApi'

const PokemonsInfo = ({ goddamnpokemon }) => {
    const {data, isLoading, error, isError} = useQuery(['pokemons'], getAllPokemons)

    return (
        <>
            <Container>
                <h1>Gotta catch 'em all</h1>

                {isLoading && (<span>Loading Pokémons...</span>)}

                {isError && (<span>ERROR {error.message}</span>)}

                {data && (
                    <Row>
                        {data.results.map(pokemon => (
                            <Col lg={3} md={4} sm={6} key={pokemon.url}>
                                <Card className='mb-3'>
                                    <Card.Body>
                                        <Card.Text>
                                            <span><strong> {pokemon.name} </strong></span>
                                        </Card.Text>

                                        <Button 
                                            variant="btn outline-dark" 
                                            as={Link}
                                            to={`/pokemon/${pokemon.name}`}                                       
                                            >Read more
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    )
}

export default PokemonsInfo