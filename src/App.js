import React from 'react';
//import axios from 'axios';
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

export default class App extends React.Component {
	constructor() {
		super();
		this.state = { name: '' };
	}

	componentDidMount() {
		/*axios.post('http://localhost:8080', {
			name: 'Bob Jones',
			industry: 'Football',
		});*/
		/*axios.get('http://localhost:8080').then((res) => {
			console.log(res);
		});*/
		//convert();
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
