import Container from 'react-bootstrap/Container'

const PokemonInfo = ({ goddamnpokemon }) => {
    console.log(goddamnpokemon)
    return (
        <>
            <Container>
                <h1>Hello {goddamnpokemon.name}</h1>
            </Container>
        </>
    )
}

export default PokemonInfo