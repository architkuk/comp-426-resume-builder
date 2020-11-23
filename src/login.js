import React from 'react';
import './login.css';
import axios from 'axios';
import Home from './home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ParticlesBg from "particles-bg";
import Button from 'react-bootstrap/Button';
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
		axios.get('http://localhost:8080',{params:{email: this.state.email}}).then((res) => {
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
		let config = {
			num: [4, 7],
			rps: 0.1,
			radius: [5, 40],
			life: [1.5, 3],
			v: [2, 3],
			tha: [-40, 40],
			alpha: [0.6, 0],
			scale: [.1, 0.4],
			position: "all",
			color: ["random", "#ff0000"],
			cross: "dead",
			// emitter: "follow",
			random: 15
		  };
	  
		  if (Math.random() > 0.85) {
			config = Object.assign(config, {
			  onParticleUpdate: (ctx, particle) => {
				ctx.beginPath();
				ctx.rect(
				  particle.p.x,
				  particle.p.y,
				  particle.radius * 2,
				  particle.radius * 2
				);
				ctx.fillStyle = particle.color;
				ctx.fill();
				ctx.closePath();
			  }
			});
		  }
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
						<ParticlesBg type="custom" config={config} bg={true} />
						<Button as = "button" type="button"> Continue </Button> {' '}
						<p>
							Don't have an account?	 <a href='/signup'>Sign Up</a>{' '}
						</p>
					</form>
				</div>
			);
	}
}
