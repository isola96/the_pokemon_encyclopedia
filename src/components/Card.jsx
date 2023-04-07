import React from 'react';
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

function Card({	pokemon }) {
	return(
		<div>
			<div>
				<p>{pokemon.name}</p>
				<Button 
					variant="outline-dark" 
					as={Link} 
					to={`/pokemon/${pokemon.name}`}
				>Read More
				</Button>
			</div>
		</div>
	);
}

export default Card;