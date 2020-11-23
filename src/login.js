import React from 'react';
import './login.css';
import axios from 'axios';
import Home from './home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		console.log(document.cookie);
		if(document.cookie.indexOf("email=")!==-1)
		{
			window.location = "/resume";
		}
	}
	handleSubmit(event) {
		// TODO: send request to API for authentication
		// should redirect to account page
		// this.state should be converted to JSON and sent
		event.preventDefault();
		axios.get('https://comp426-resume-builder.herokuapp.com',{params:{email: this.state.email}}).then((res) => {
			console.log(res);
			if(this.state.password === res.data['password'])
			{
				console.log("logged in");
				window.location = "/resume";
				document.cookie = `email=${this.state.email}`;
			}
		});
	}
	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
			state: 0,
		});
	}
	render() {
			return (
				<div name='box'>
					<form onSubmit={this.handleSubmit}>
						<h6> Welcome Back! </h6>
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
							name='password'
							type='password'
							value={this.state.password}
							placeholder='Password'
							onChange={this.handleChange}
						/>
						<input type='submit' value='Continue' />
						<p>
							Don't have an account? <a href='/signup'>Sign Up</a>{' '}
						</p>
					</form>
				</div>
			);
		
	}
}
