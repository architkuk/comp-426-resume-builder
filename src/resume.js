import React from 'react';
import axios from 'axios';
import './resume.css';
import Autocomplete from 'react-autocomplete';

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
				'https://docs.google.com/document/d/1mlS3pLobUeJKe1dFFLgE-ziJeMqUZ6apg_8jXQVV0Aw/export?format=pdf',
			name: '',
			job: 1,
			school: '',
			major: '',
			resumeId: '',
			viewer: `https://docs.google.com/viewerng/viewer?url=https://docs.google.com/document/d/1mlS3pLobUeJKe1dFFLgE-ziJeMqUZ6apg_8jXQVV0Aw/export?format=pdf&embedded=true`,
			data: {},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.logout = this.logout.bind(this);
		this.numjobs = this.numjobs.bind(this);
	}
	numjobs(event) {
		this.setState({
			job: parseInt(event.target.value),
		});
	}
	handleSubmit(event) {
		axios
			.post('https://comp426-resume-builder.herokuapp.com/copy', {
				name: this.state.data['First'],
			})
			.then((res) => {
				this.setState({ resumeId: res.data });
				axios
					.put('https://comp426-resume-builder.herokuapp.com/update', {
						id: res.data,
						data: this.state.data,
					})
					.then((res) => {
						this.setState({
							url: `https://docs.google.com/document/d/${this.state.resumeId}/export?format=pdf`,
						});
						this.setState({
							viewer: `https://docs.google.com/viewerng/viewer?url=${this.state.url}&embedded=true`,
						});
						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
		event.preventDefault();
	}

	handleChange(event) {
		this.setState((prevState) => ({
			data: {
				...prevState.data,
				[event.target.name]: event.target.value,
			},
		}));
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
							<Form onSubmit={this.handleSubmit}>
								<Form.Row>
									<Form.Group as={Col} md='4' controlId='validationCustom01'>
										<Form.Label>First name</Form.Label>
										<Form.Control
											required
											type='text'
											name='First'
											onChange={this.handleChange}
											placeholder='First name'
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md='4' controlId='validationCustom02'>
										<Form.Label>Last name</Form.Label>
										<Form.Control
											required
											type='text'
											name='Last'
											onChange={this.handleChange}
											placeholder='Last name'
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group as={Col} md='4' controlId='validationCustom02'>
										<Form.Label>Position</Form.Label>
										<Form.Control
											required
											type='text'
											name='Position'
											onChange={this.handleChange}
											placeholder='Position'
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
								</Form.Row>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type='email'
										name='Email'
										onChange={this.handleChange}
										placeholder='name@example.com'
									/>
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
									<Form.Control
										type='linkedin'
										name='LinkedIn'
										onChange={this.handleChange}
										placeholder='Linkedin'
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Organization 1:</Form.Label>
									<Form.Control type='linkedin' placeholder='Name' />
									<Form.Control type='linkedin' placeholder='Location' />
									<Form.Control type='linkedin' placeholder='Title' />
									<br />
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Description'
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput2'>
									<Form.Label>Organization 1:</Form.Label>
									<Form.Control type='linkedin' placeholder='Name' />
									<Form.Control type='linkedin' placeholder='Location' />
									<Form.Control type='linkedin' placeholder='Title' />
									<br />
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Description'
									/>
									<Form.Label>Organization 2:</Form.Label>
									<Form.Control type='linkedin' placeholder='Name' />
									<Form.Control type='linkedin' placeholder='Location' />
									<Form.Control type='linkedin' placeholder='Title' />
									<br />
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Description'
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput2'>
									<Form.Label>Organization 1:</Form.Label>
									<Form.Control type='linkedin' placeholder='Name' />
									<Form.Control type='linkedin' placeholder='Location' />
									<Form.Control type='linkedin' placeholder='Title' />
									<br />
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Description'
									/>
									<Form.Label>Organization 2:</Form.Label>
									<Form.Control type='linkedin' placeholder='Name' />
									<Form.Control type='linkedin' placeholder='Location' />
									<Form.Control type='linkedin' placeholder='Title' />
									<br />
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Description'
									/>
									<Form.Label>Organization 3:</Form.Label>
									<Form.Control type='linkedin' placeholder='Name' />
									<Form.Control type='linkedin' placeholder='Location' />
									<Form.Control type='linkedin' placeholder='Title' />
									<br />
									<Form.Control
										as='textarea'
										rows={3}
										placeholder='Description'
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Major</Form.Label>
									<br></br>
									<Autocomplete
										items={majors}
										shouldItemRender={(item, value) =>
											item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
										}
										getItemValue={(item) => item.label}
										renderItem={(item, highlighted) => (
											<div
												key={item.id}
												style={{
													backgroundColor: highlighted ? '#eee' : 'transparent',
												}}
											>
												{item.label}
											</div>
										)}
										value={this.state.major}
										onChange={(e) => this.setState({ major: e.target.value })}
										onSelect={(value) => this.setState({ major: value })}
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>School</Form.Label>
									<br></br>
									<Autocomplete
										items={schools}
										shouldItemRender={(item, value) =>
											item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
										}
										getItemValue={(item) => item.label}
										renderItem={(item, highlighted) => (
											<div
												key={item.id}
												style={{
													backgroundColor: highlighted ? '#eee' : 'transparent',
												}}
											>
												{item.label}
											</div>
										)}
										value={this.state.school}
										onChange={(e) => this.setState({ school: e.target.value })}
										onSelect={(value) => this.setState({ school: value })}
									/>
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
						<iframe title='pdf' src={this.state.viewer}></iframe>
					</div>
				</div>
			</div>
		);
	}
}

const majors = [
	{ id: 'Accounting', label: 'Accounting' },
	{ id: 'African Studies', label: 'African Studies' },
	{ id: 'Agriculture', label: 'Agriculture' },
	{ id: 'Anthropology', label: 'Anthropology' },
	{ id: 'Applied Health Services', label: 'Applied Health Services' },
	{ id: 'Architecture', label: 'Architecture' },
	{ id: 'Art', label: 'Art' },
	{ id: 'Asian Studies', label: 'Asian Studies' },
	{ id: 'Biology', label: 'Biology' },
	{ id: 'Business', label: 'Business' },
	{ id: 'Business Administration', label: 'Business Administration' },
	{ id: 'Chemistry', label: 'Chemistry' },
	{ id: 'Classical Languages', label: 'Classical Languages' },
	{ id: 'Communication Design', label: 'Communication Design' },
	{ id: 'Communications & Film', label: 'Communications & Film' },
	{ id: 'Computer Science', label: 'Computer Science' },
	{ id: 'Dentistry', label: 'Dentistry' },
	{ id: 'Design and Technology', label: 'Design and Technology' },
	{ id: 'Developing Nations', label: 'Developing Nations' },
	{ id: 'Discipline Unknown', label: 'Discipline Unknown' },
	{ id: 'Earth Sciences', label: 'Earth Sciences' },
	{ id: 'Economics', label: 'Economics' },
	{ id: 'Education', label: 'Education' },
	{ id: 'Electronics', label: 'Electronics' },
	{ id: 'Engineering', label: 'Engineering' },
	{ id: 'English Studies', label: 'English Studies' },
	{ id: 'Environmental Studies', label: 'Environmental Studies' },
	{ id: 'European Studies', label: 'European Studies' },
	{ id: 'Fashion', label: 'Fashion' },
	{ id: 'Finance', label: 'Finance' },
	{ id: 'Fine Arts', label: 'Fine Arts' },
	{ id: 'General Studies', label: 'General Studies' },
	{ id: 'Health Services', label: 'Health Services' },
	{ id: 'History', label: 'History' },
	{ id: 'Human Resources Management', label: 'Human Resources Management' },
	{ id: 'Humanities', label: 'Humanities' },
	{ id: 'Industrial Arts & Carpentry', label: 'Industrial Arts & Carpentry' },
	{ id: 'Information Systems', label: 'Information Systems' },
	{ id: 'International Relations', label: 'International Relations' },
	{ id: 'Journalism', label: 'Journalism' },
	{ id: 'Languages', label: 'Languages' },
	{ id: 'Latin American Studies', label: 'Latin American Studies' },
	{ id: 'Law', label: 'Law' },
	{ id: 'Linguistics', label: 'Linguistics' },
	{ id: 'Manufacturing & Mechanics', label: 'Manufacturing & Mechanics' },
	{ id: 'Mathematics', label: 'Mathematics' },
	{ id: 'Medicine', label: 'Medicine' },
	{ id: 'Middle Eastern Studies', label: 'Middle Eastern Studies' },
	{ id: 'Naval Science', label: 'Naval Science' },
	{ id: 'North American Studies', label: 'North American Studies' },
	{ id: 'Nuclear Technics', label: 'Nuclear Technics' },
	{
		id: 'Operations Research & Strategy',
		label: 'Operations Research & Strategy',
	},
	{ id: 'Organizational Theory', label: 'Organizational Theory' },
	{ id: 'Philosophy', label: 'Philosophy' },
	{ id: 'Physical Education', label: 'Physical Education' },
	{ id: 'Physical Sciences', label: 'Physical Sciences' },
	{ id: 'Physics', label: 'Physics' },
	{ id: 'Political Science', label: 'Political Science' },
	{ id: 'Psychology', label: 'Psychology' },
	{ id: 'Public Policy', label: 'Public Policy' },
	{ id: 'Public Service', label: 'Public Service' },
	{ id: 'Religious Studies', label: 'Religious Studies' },
	{ id: 'Russian & Soviet Studies', label: 'Russian & Soviet Studies' },
	{ id: 'Scandinavian Studies', label: 'Scandinavian Studies' },
	{ id: 'Science', label: 'Science' },
	{ id: 'Slavic Studies', label: 'Slavic Studies' },
	{ id: 'Social Science', label: 'Social Science' },
	{ id: 'Social Sciences', label: 'Social Sciences' },
	{ id: 'Sociology', label: 'Sociology' },
	{ id: 'Speech', label: 'Speech' },
	{ id: 'Statistics & Decision Theory', label: 'Statistics & Decision Theory' },
	{ id: 'Urban Studies', label: 'Urban Studies' },
	{ id: 'Veterinary Medicine', label: 'Veterinary Medicine' },
	{ id: 'Other', label: 'Other' },
];

const schools = [
	{ id: 'Duke University', label: 'Duke University' },
	{
		id: 'University of North Carolina Chapel Hill',
		label: 'University of North Carolina Chapel Hill',
	},
	{
		id: 'North Carolina State University',
		label: 'North Carolina State University',
	},
	{ id: 'Wake Forest University', label: 'Wake Forest University' },
	{ id: 'East Carolina University', label: 'East Carolina University' },
	{ id: 'Elon University', label: 'Elon University' },
	{
		id: 'University of North Carolina at Charlotte',
		label: 'University of North Carolina at Charlotte',
	},
	{
		id: 'University of North Carolina at Greensboro',
		label: 'University of North Carolina at Greensboro',
	},
];
