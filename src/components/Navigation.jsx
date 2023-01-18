import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const Navigation = () => {
	const { currentUser } = useAuthContext()

	return (
		<Navbar expand="lg" bg="dark" variant="dark" className="pb-3">
			<Container>
				<Navbar.Brand as={Link} to="/">The Pokémon Encyclopedia</Navbar.Brand>
								
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto align-items-center">
						{
							currentUser ? (
								<>
									{/* User is logged in */}
									<Nav.Link as={NavLink} end to="/logout">Log Out</Nav.Link>
								</>
							) : (
								<>
									{/* No user is logged in */}
									<Nav.Link as={NavLink} end to="/login">Log In</Nav.Link>
									<Nav.Link as={NavLink} end to="/signup">Sign Up</Nav.Link>
								</>
							)
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation