import Container from 'react-bootstrap/Container'

const PokemonInfo = ({ goddamnpokemon }) => {
    
    return (
        <>
            <Container>
                <h1>Hello {goddamnpokemon.name}</h1>
                <img src={goddamnpokemon.sprites.other.dream_world.front_default} alt="pokemon-picture" className='w-50 p-3' />
                <p>{goddamnpokemon.types[0].type.name}</p>

                {goddamnpokemon.types.length > 1 ? (
                    <p>{goddamnpokemon.types[1].type.name}</p>
                ) : (
                    <p></p>
                )}

                <p>Height {goddamnpokemon.height}</p>
                <p>Weight {goddamnpokemon.weight}</p>
            </Container>
        </>
    )
}

export default PokemonInfo  