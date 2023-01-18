import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const SignUpForm = () => {
	const emailRef = useRef()
    const displayNameRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { signup } = useAuthContext()

	const handleSubmit = async (e) => {
		e.preventDefault()

		// check password is the same in both fields
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords does not match")
		}

		setError(null);

		// try to sign up the user
		try {
			setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)

		} catch (err) {
			setError(err.message)
			setLoading(false)
		}
	}

	return (
		<Container>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title className="mb-3">Sign Up</Card.Title>

							{error && (<Alert variant="danger">{error}</Alert>)}

							<Form onSubmit={handleSubmit}>
                                <Form.Group id="displayName" className="mb-3">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" ref={displayNameRef} />
								</Form.Group>

								<Form.Group id="email" className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Form.Group id="password" className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>

								<Form.Group id="password-confirm" className="mb-3">
									<Form.Label>Password Confirmation</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} required />
								</Form.Group>

								<Button disabled={loading} type="submit">Create Account</Button>
							</Form>

						</Card.Body>
					</Card>

					<div className="text-center mt-3">
						Already have an account? <Link to="/login">Log In</Link>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default SignUpForm