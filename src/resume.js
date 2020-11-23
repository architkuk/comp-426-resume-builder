import React from 'react';
import axios from 'axios';
import './resume.css';
import {DropdownButton, Dropdown} from 'react-bootstrap';
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
			.post('http://localhost:8080/copy', { name: this.state.name })
			.then((res) => {
				console.log(res);
			});
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			name: event.target.value,
		});
	}
	logout(event)
	{
		document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location = "/login";
	}
	render() {
		return (
			<div className = "con">
				<DropdownButton className = "logout" id="dropdown-basic-button" title="Settings">
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item onClick = {this.logout}>Logout</Dropdown.Item>
				</DropdownButton>
			<div className = "both">
			<div className='container'>
				<div className='inputDiv'>
					<form onSubmit={this.handleSubmit}>
						<input onChange={this.handleChange} placeholder='First Name'/>
						<input onChange={this.handleChange} placeholder='Last Name'/>
						<input onChange={this.handleChange} placeholder='Position'/>
						<input onChange={this.handleChange} placeholder='LinkedIn URL'/>
						<textarea
							onChange={this.handleChange}
							placeholder='Skills list'
						></textarea>
						<input onChange={this.handleChange} placeholder='Email'/>
						<input
							onChange={this.handleChange}
							placeholder='Most Recent Employer'
						/>
						<input
							onChange={this.handleChange}
							placeholder='Location of Most Recent Job'
						/>
						<input
							onChange={this.handleChange}
							type='date'
							value='Start Date'
						/>
						<input type='submit' value='submit' />
					</form>
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
/*				<iframe
title='pdf'
src='https://docs.google.com/viewerng/viewer?url=https://docs.google.com/document/d/1vC4eN320DyY9Y1-rHLKPZkWKSpwXGX55PijHjUwdNjY/export?format=pdf&embedded=true'
></iframe>*/
