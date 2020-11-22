import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home.js';
import Login from './login.js';
import Signup from './signup.js';
import Resume from './resume.js';
//import convert from './convert';

/*
This is the routing page
All this page does is route to the appropriate javascript file
To add a new HTML route, just copy the <Route> tag and add a new path
Make sure to import the component before adding a new route
*/
/*

*/

/*axios
	.get('http://localhost:8080', { params: { name: 'Bob Dylan' } })
	.then((res) => {
		console.log(res);
	});*/

/*axios
	.delete('http://localhost:8080', {
		name: 'Bob Dylan',
	})
	.then((res) => {
		console.log(res);
	});*/
/*
POST https://www.googleapis.com/drive/v3/files/[FILEID]/copy?key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json
Content-Type: application/json

{}

*/

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { name: '', rendered: false };
	}

	componentDidMount() {
		if (this.state.rendered === false) {
			this.setState({ rendered: true });
			axios.post('http://localhost:8080/copy', {
				name: 'Bob Jones',
			});
		}
	}

	render() {
		return (
			<div className='background'>
				<div className='main'>
					<BrowserRouter className='router'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/signup' component={Signup} />
							<Route exact path='/resume' component={Resume} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}
