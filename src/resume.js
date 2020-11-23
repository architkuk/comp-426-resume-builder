
import React from 'react';
import axios from 'axios';
import './resume.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
					<Dropdown.Item href='/settings'>Settings</Dropdown.Item>
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
									<Form.Label>Linkedin</Form.Label>
									<Form.Control type='linkedin' placeholder='Linkedin' />
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlSelect1'>
									<Form.Label>Number of Jobs</Form.Label>
									<Form.Control as='select'>
										<option>1</option>
										<option>2</option>
										<option>3</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Major</Form.Label>
									<Autocomplete
									id="combo-box-demo"
									options={majors}
									getOptionLabel={(option) => option.title}
									style={{ width: 300 }}
									renderInput={(params) => <TextField {...params} label="Major" variant="outlined" />}
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>School</Form.Label>
									<Form.Control type='school' placeholder='School' />
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Awards</Form.Label>
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

const majors = [
	{ title: 'Accounting' },
	{ title: 'African Studies' },
	{ title: 'Agriculture' },
	{ title: 'Anthropology' },
	{ title: 'Applied Health Services' },
	{ title: 'Architecture' },
	{ title: 'Art' },
	{ title: 'Asian Studies' },
	{ title: 'Biology' },
	{ title: 'Business' },
	{ title: 'Business Administration' },
	{ title: 'Chemistry' },
	{ title: 'Classical Languages' },
	{ title: 'Communication Design' },
	{ title: 'Communications & Film' },
	{ title: 'Computer Science' },
	{ title: 'Dentistry' },
	{ title: 'Design and Technology' },
	{ title: 'Developing Nations' },
	{ title: 'Discipline Unknown' },
	{ title: 'Earth Sciences' },
	{ title: 'Economics' },
	{ title: 'Education' },
	{ title: 'Electronics' },
	{ title: 'Engineering' },
	{ title: 'English Studies' },
	{ title: 'Environmental Studies' },
	{ title: 'European Studies' },
	{ title: 'Fashion' },
	{ title: 'Finance' },
	{ title: 'Fine Arts' },
	{ title: 'General Studies' },
	{ title: 'Health Services' },
	{ title: 'History' },
	{ title: 'Human Resources Management' },
	{ title: 'Humanities' },
	{ title: 'Industrial Arts & Carpentry' },
	{ title: 'Information Systems' },
	{ title: 'International Relations' },
	{ title: 'Journalism' },
	{ title: 'Languages' },
	{ title: 'Latin American Studies' },
	{ title: 'Law' },
	{ title: 'Linguistics' },
	{ title: 'Manufacturing & Mechanics' },
	{ title: 'Mathematics' },
	{ title: 'Medicine' },
	{ title: 'Middle Eastern Studies' },
	{ title: 'Naval Science' },
	{ title: 'North American Studies' },
	{ title: 'Nuclear Technics' },
	{ title: 'Operations Research & Strategy' },
	{ title: 'Organizational Theory' },
	{ title: 'Philosophy' },
	{ title: 'Physical Education' },
	{ title: 'Physical Sciences' },
	{ title: 'Physics' },
	{ title: 'Political Science' },
	{ title: 'Psychology' },
	{ title: 'Public Policy' },
	{ title: 'Public Service' },
	{ title: 'Religious Studies' },
	{ title: 'Russian & Soviet Studies' },
	{ title: 'Scandinavian Studies' },
	{ title: 'Science' },
	{ title: 'Slavic Studies' },
	{ title: 'Social Science' },
	{ title: 'Social Sciences' },
	{ title: 'Sociology' },
	{ title: 'Speech' },
	{ title: 'Statistics & Decision Theory' },
	{ title: 'Urban Studies' },
	{ title: 'Veterinary Medicine' },
	{ title: 'Other' },
  ];