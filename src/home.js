import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	renderRedirect = () => {
		return <Redirect to='/login' />
	}

	render() {
		return <div>{this.renderRedirect()}</div>;
	}
}
