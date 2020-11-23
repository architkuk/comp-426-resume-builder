
import React from 'react';
import axios from 'axios';
import './resume.css';
import {
	DropdownButton,
	Dropdown,
	Form,
	Row,
	Col,
	Button,
} from 'react-bootstrap';
export default class Resume extends React.Component {
	constructor() {
		super();
		this.state = {
			url:
				'https://docs.google.com/document/d/1AeMo9OIXlWWTmKmh2vp2Q_4JXUtMsF1rjFjpDuY6C9w/export?format=pdf',
			name: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.logout = this.logout.bind(this);
	}

	handleSubmit(event) {
		axios
			.post('https://comp426-resume-builder.herokuapp.com', {
				name: this.state.name,
			})
			.then((res) => {
				console.log(res);
			});
		event.preventDefault();
	}

	handleChange(event) {
		/*this.setState({
			name: event.target.value,
		});*/
	}
	logout(event) {
		document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		window.location = '/login';
	}
	render() {
		return (
			<div className='con'>
				<DropdownButton
					className='logout'
					id='dropdown-basic-button'
					title='Settings'
				>
					<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
					<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
					<Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
				</DropdownButton>
				<div className='both'>
					<div className='container'>
						<div className='inputDiv'>
							<Form>
								<Form.Row>
									<Form.Group as={Col} md='4' controlId='validationCustom01'>
										<Form.Label>First name</Form.Label>
										<Form.Control
											required
											type='text'
											placeholder='First name'
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md='4' controlId='validationCustom02'>
										<Form.Label>Last name</Form.Label>
										<Form.Control
											required
											type='text'
											placeholder='Last name'
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md='4' controlId='validationCustom02'>
										<Form.Label>Position</Form.Label>
										<Form.Control required type='text' placeholder='Position' />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
								</Form.Row>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Email address</Form.Label>
									<Form.Control type='email' placeholder='name@example.com' />
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Example textarea</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
								<Form.Row>
									<Form.Group as={Col} md='6' controlId='validationCustom03'>
										<Form.Label>City</Form.Label>
										<Form.Control type='text' placeholder='City' required />
										<Form.Control.Feedback type='invalid'>
											Please provide a valid city.
										</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md='3' controlId='validationCustom04'>
										<Form.Label>State</Form.Label>
										<Form.Control type='text' placeholder='State' required />
										<Form.Control.Feedback type='invalid'>
											Please provide a valid state.
										</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md='3' controlId='validationCustom05'>
										<Form.Label>Zip</Form.Label>
										<Form.Control type='text' placeholder='Zip' required />
										<Form.Control.Feedback type='invalid'>
											Please provide a valid zip.
										</Form.Control.Feedback>
									</Form.Group>
								</Form.Row>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Email address</Form.Label>
									<Form.Control type='email' placeholder='name@example.com' />
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlSelect1'>
									<Form.Label>Example select</Form.Label>
									<Form.Control as='select'>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlSelect2'>
									<Form.Label>Example multiple select</Form.Label>
									<Form.Control as='select' multiple>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Example textarea</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
								<Form.Group as={Row}>
									<Col sm={{ span: 10, offset: 2 }}>
										<Button type='submit'>Sign in</Button>
									</Col>
								</Form.Group>
							</Form>
						</div>
					</div>
					<div className='pdfDiv'>
						<iframe
							title='pdf'
							src={`https://docs.google.com/viewerng/viewer?url=${this.state.url}&embedded=true`}
						></iframe>
					</div>
				</div>
			</div>
		);
	}
}