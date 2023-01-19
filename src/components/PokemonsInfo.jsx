import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAllPokemons } from '../services/PokeApi'
import { useState } from 'react'

const PokemonsInfo = () => {
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)
    const {data, isLoading, error, isError} = useQuery(['pokemons', offset, limit], () => {
        return getAllPokemons(offset)
    })

    return (
        <>
            <Container>
                <h1>Gotta catch 'em all</h1>

                {isLoading && (<span>Loading Pokémons...</span>)}

                {isError && (<span>ERROR {error.message}</span>)}

                {data && data.results.map(pokemon => (
                    <>
                        <Row>
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
                        </Row>
                    </>
                ))}
                <div>
                    <Button 
                        variant="btn outline-dark"   
                        onClick={() => setOffset(currentPage => currentPage - 20)}                               
                        >Previous
                    </Button>
                    <span>{offset} & {limit}</span>
                    <Button 
                        variant="btn outline-dark"      
                        onClick={() => setOffset(currentPage => currentPage + 20)}                                        
                        >Next
                    </Button>
                </div>
            </Container>
        </> 
    )
}

export default PokemonsInfo