import React from 'react';
import './login.css';
import axios from 'axios';
export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			school: '',
			last: '',
			first: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event) {
		// TODO: send request to API for authentication
		// should redirect to account page
		// this.state should be converted to JSON and sent
		axios.post('https://comp426-resume-builder.herokuapp.com', this.state).then(res =>{
			console.log(res);
		}).catch(err => console.log(err));
		event.preventDefault();
	}
	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}
	render() {
		return (
			<div name='box'>
				<form onSubmit={this.handleSubmit}>
					<h6> Sign Up </h6>
					<input
						className='text'
						name='first'
						type='text'
						value={this.state.first}
						placeholder='First Name'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='last'
						type='text'
						value={this.state.last}
						placeholder='Last Name'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='school'
						type='text'
						value={this.state.school}
						placeholder='School'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='email'
						type='text'
						value={this.state.email}
						placeholder='Email'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='password'
						type='text'
						value={this.state.password}
						placeholder='Password'
						onChange={this.handleChange}
					/>
					<input type='submit' value='Continue' />
					<p>
						Already have an account? <a href='/login'>Log In</a>{' '}
					</p>
				</form>
			</div>
			
		);
	}
}
