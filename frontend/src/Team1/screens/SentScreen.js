import React from 'react'
import Message from '../components/Message'
import { Button, Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer.js'
import { Fragment, useState, useEffect } from 'react'

const SentScreen = ({ history }) => {
	const [token, setToken] = useState('')
	const submitHandler = (e) => {
		e.preventDefault()

		// var val=JSON.stringify(link)
		history.push('/resetPassword/' + token)
	}
	const onTokenChange = (event) => {
		var tokenValue = event.target.value

		setToken(tokenValue)
	}
	return (
		<div>
			<FormContainer>
				<Message variant='success'>MAIL SENT SUCCESSFULLY</Message>
			</FormContainer>
			<FormContainer>
				<h1>Put the token here</h1>
				<Form onSubmit={submitHandler}>
					<Form.Group controlId='token'>
						<Form.Label>Enter Token</Form.Label>
						<Form.Control
							type='text'
							placeholder='Put token here'
							value={token}
							onChange={onTokenChange}
						></Form.Control>
					</Form.Group>

					<Button type='submit' variant='primary'>
						RESET PASSWORD
					</Button>
				</Form>
				<br />
			</FormContainer>
		</div>
	)
}

export default SentScreen
