import Container from 'react-bootstrap/Container'

const PokemonInfo = ({ goddamnpokemon }) => {
    
    return (
        <>
            <Container>
                <h1>{goddamnpokemon.name}</h1>
                <img src={goddamnpokemon.sprites.other.dream_world.front_default} alt="pokemon-picture" className='w-50 p-3' />
                <div>{goddamnpokemon.types[0].type.name}</div>

                {goddamnpokemon.types.length > 1 ? (
                    <div>{goddamnpokemon.types[1].type.name}</div>
                ) : (
                    <div></div>
                )}

                <div>Height {goddamnpokemon.height}</div>
                <div>Weight {goddamnpokemon.weight}</div>
            </Container>
        </>
    )
}

export default PokemonInfo  