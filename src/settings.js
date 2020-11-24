import React from 'react';
import axios from 'axios';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import ParticlesBg from "particles-bg";
import { Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import './resume.css';
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
		
		this.add = "";
		let cookies = document.cookie.split(";");
		for(var i=0; i<cookies.length; i++)
		{	
			console.log(cookies[i].replace( /\s/g, ''));
			if(cookies[i].indexOf("email=") != -1){
				this.add = cookies[i].replace( /\s/g, '').substring(6);
			}
		}
		console.log(this.add);
		axios.get('https://comp426-resume-builder.herokuapp.com',{params:{email: this.add}}).then((res) => {
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
		axios.put('https://comp426-resume-builder.herokuapp.com', {
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
				<ParticlesBg type="circle" bg={true}/>
			<div name='box'>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/resume">Resume Builder</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
					<Nav.Link href="/resume">Home</Nav.Link>
					<Nav.Link href="/templates">Add Template</Nav.Link>
					<Nav.Link href="/settings">Settings</Nav.Link>
					<Nav.Link onClick={this.logout}>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				</Navbar>
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
					type='password'
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
