import React, { useState } from 'react';
import Scroll from './Scroll'
import SearchList from './SearchList';

function Search({ details }) {
	const [searchField, setSearchField] = useState("");
  	const [searchShow, setSearchShow] = useState(false);

  	const filteredPokemons = details.filter(
    	pokemon => {
      		return (
				pokemon
					.name
					.toLowerCase()
					.includes(searchField.toLowerCase())
      		);
    	}
  	);

	const handleChange = e => {
    	setSearchField(e.target.value);
    	if(e.target.value===""){
      		setSearchShow(false);
    	}
    	else {
      		setSearchShow(true);
    	}
  	};

	function searchList() {
  		if (searchShow) {
	  		return (
	  			<Scroll>
	  				<SearchList filteredPokemons={filteredPokemons} />
	  			</Scroll>
	  		);
	  	}
  	}

	return (
    	<section>
			<div className='searchDiv'>
				<input 
					type = "search" 
					placeholder = "Search Pokemon" 
					onChange = {handleChange}
				/>
			</div>
			{searchList()}
		</section>
  	);
}

export default Search;