import Container from 'react-bootstrap/Container'

const PokemonInfo = ({ goddamnpokemon }) => {
    
    return (
        <>
            <Container>
                <h1>Hello {goddamnpokemon.name}</h1>
                <img src={goddamnpokemon.sprites.other.dream_world.front_default} alt="pokemon-picture" className='w-50 p-3' />
            </Container>
        </>
    )
}

export default PokemonInfo  