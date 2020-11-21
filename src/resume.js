import React from 'react';
import './resume.css';

export default class Resume extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className='container'>
				<div className='inputDiv'>
					<form onSubmit={this.handleSubmit}></form>
				</div>
				<div className='btnDiv'>
					<button>Download</button>
				</div>
				<div className='pdfDiv'>
					<iframe src='https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true'></iframe>
				</div>
			</div>
		);
	}
}
