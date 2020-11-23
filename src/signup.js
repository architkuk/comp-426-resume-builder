import React from 'react';
import axios from 'axios';
import ParticlesBg from "particles-bg";
import Button from 'react-bootstrap/Button';
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
		axios.post('http://localhost:8080', this.state).then(res =>{
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
				if(ctx.getContext())
				{
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
			  }
			});
		  }
		return (
			<div name='box2'>
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
						type='password'
						value={this.state.password}
						placeholder='Password'
						onChange={this.handleChange}
					/>
					<ParticlesBg type="custom" config={config} bg={true} />
					<Button as = "button" type="button"> Continue </Button> {' '}
					<p>
						Already have an account? <a href='/login'>Log In</a>{' '}
					</p>
				</form>
			</div>
			
		);
	}
}
