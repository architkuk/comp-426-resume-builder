import React from 'react';
import axios from 'axios';
import {DropdownButton, Dropdown} from 'react-bootstrap';
export default class Settings extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			school: '',
			last: '',
			first: '',
		};
		this.add = document.cookie.substring(6);
		axios.get('http://localhost:8080',{params:{email: this.add}}).then((res) => {
			this.setState({
				email: res.data['email'],
				password: res.data['password'],
				school: res.data['school'],
				last: res.data['last'],
				first: res.data['first']
			});
		});
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event) {
		// TODO: send request to API for authentication
		// should redirect to account page
		// this.state should be converted to JSON and sent
		axios.put('http://localhost:8080', {
			email: this.state.email,
			data: this.state
		});
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}
	logout(event)
	{
		document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location = "/login";
	}
	render() {
		return (
			<div>
				<DropdownButton className = "logout" id="dropdown-basic-button" title="Options">
				<Dropdown.Item href="/resume">Home</Dropdown.Item>
				<Dropdown.Item onClick = {this.logout}>Logout</Dropdown.Item>
				</DropdownButton>
			<div name='box'>
			<form onSubmit={this.handleSubmit}>
				<h6> Update Profile </h6>
				<input
					className='text'
					name='first'
					type='text'
					value={this.state.first}
					placeholder='First Name'
					onChange={this.handleChange}
				/>
				<br></br>
				<input
					className='text'
					name='last'
					type='text'
					value={this.state.last}
					placeholder='Last Name'
					onChange={this.handleChange}
				/>
				<br></br>
				<input
					className='text'
					name='school'
					type='text'
					value={this.state.school}
					placeholder='school'
					onChange={this.handleChange}
				/>
				<br></br>
				<input
					className='text'
					name='email'
					type='text'
					value={this.state.email}
					placeholder='Email'
					readOnly
				/>
				<br></br>
				<input
					className='text'
					name='password'
					type='text'
					value={this.state.password}
					placeholder='Password'
					onChange={this.handleChange}
				/>
				<br></br>
				<input type='submit' value='Update' />
			</form> 
		</div>
		</div>
		);
	}
}
