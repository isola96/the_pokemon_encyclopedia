import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const Navigation = () => {
	const { currentUser } = useAuthContext()

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">The Pokémon Encyclopedia</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto align-items-center">
						{
							currentUser ? (
								<>
									{/* User is logged in */}
									<NavDropdown>
										<NavLink to="/" className="dropdown-item">Profile</NavLink>
										<NavDropdown.Divider />
										<NavLink to="/logout" className="dropdown-item">Log Out</NavLink>
									</NavDropdown>
								</>
							) : (
								<>
									{/* No user is logged in */}
									<Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
									<Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
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