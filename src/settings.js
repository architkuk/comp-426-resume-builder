import React from 'react';
import axios from 'axios';
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
	}
	handleSubmit(event) {
		// TODO: send request to API for authentication
		// should redirect to account page
		// this.state should be converted to JSON and sent
		axios.put('http://localhost:8080', {
			email: this.state.email,
			password: this.state.password,
			school: this.state.school,
			last: this.state.last,
			first: this.state.first,
		}).then((res) => {
			console.log(res);
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

	render() {
		return (
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
					onChange={this.handleChange}
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
			
		</div>);
		
	}
}
