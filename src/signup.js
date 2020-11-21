import React from 'react';
import './login.css';

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event) {
		// TODO: send request to API for authentication
		// should redirect to account page
		// this.state should be converted to JSON and sent
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
						name='email'
						type='text'
						value={this.state.email}
						placeholder='First Name'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='email'
						type='text'
						value={this.state.email}
						placeholder='Last Name'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='email'
						type='text'
						value={this.state.email}
						placeholder='Industry (Dropdown)'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='email'
						type='text'
						value={this.state.email}
						placeholder='Email or Username'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='email'
						type='text'
						value={this.state.email}
						placeholder='Confirm Email or Username'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='password'
						type='password'
						value={this.state.password}
						placeholder='Password'
						onChange={this.handleChange}
					/>
					<input
						className='text'
						name='password'
						type='password'
						value={this.state.password}
						placeholder='Confirm Password'
						onChange={this.handleChange}
					/>
					<input type='submit' value='Continue' />
					<p>
						Already have an account? <a href='login'>Log In</a>{' '}
					</p>
				</form>
			</div>
		);
	}
}
