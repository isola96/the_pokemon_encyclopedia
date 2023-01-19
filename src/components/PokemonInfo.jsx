import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import LikeButton from './LikeButton'

const PokemonInfo = ({ goddamnpokemon }) => {
    
    return (
        <>
            <Container>
                    <Row>   
                        <Col lg={3} md={4} sm={6} key={goddamnpokemon.id}>
                            <Card className='mb-3'>
                                <Card.Header>
                                    <Card.Img variant="top" src={goddamnpokemon.sprites.other["official-artwork"].front_default} />
                                </Card.Header>

                                <Card.Body>
                                    <Card.Title>{goddamnpokemon.name}</Card.Title>

                                    <Card.Text>
                                        <p>{goddamnpokemon.types[0].type.name}</p>
                                        {goddamnpokemon.types.length > 1 ? (
                                            <p>{goddamnpokemon.types[1].type.name}</p>
                                                ) : (
                                                    <p></p>
                                                )
                                        }
                                        <p>Height {goddamnpokemon.height}</p>
                                        <p>Weight {goddamnpokemon.weight}</p>
                                    </Card.Text>
                                    <LikeButton />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </>
    )
}

export default PokemonInfo  