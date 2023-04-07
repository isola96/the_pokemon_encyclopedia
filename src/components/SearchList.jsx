import React from 'react';
import Card from './Card';

function SearchList({ filteredPokemons }) {
	const filtered = filteredPokemons.map( pokemon =>  <Card key={pokemon.id} pokemon={pokemon} />); 

  	return	(
    	<div>
      		{filtered}
    	</div>
  	);
}

export default SearchList;