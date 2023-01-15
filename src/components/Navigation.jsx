import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">The Pokémon Encyclopedia</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/login">Log In</Nav.Link>
						<Nav.Link as={NavLink} end to="/logout">Log Out</Nav.Link>
						<Nav.Link as={NavLink} end to="/signup">Sign Up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation