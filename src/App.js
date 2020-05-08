import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import Register from './components/Register/Register/Register';
import Tab from './components/Tab/Tab';
import GallaryImages from './components/Tab/GallaryImages/GallaryImages';

const particleOptions = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}

const initialState = {
	route: 'home',
	isSignedIn: false,
}


class App extends Component {

	constructor() {
		super();
		this.state = initialState;
	}

	onRouteChange = (route) => {
		console.log("route", route);
		// if(route === 'signin') {
		// 	this.setState({
		// 		isSignedIn: true,
		// 	})
		// }

		if(route === 'signout') {
			this.setState({
				isSignedIn: false
			})
		}

		this.setState({
			route: route
		})
	}

	render() {
		const { route, isSignedIn, showSignInPopup } = this.state;
		return (
		  	<div>
		  		<Particles className='particles'
						params={ particleOptions }
				/>
		  		<Navigation onRouteChangeProxy = { this.onRouteChange } isSignedInProxy = { isSignedIn } />
		    	<Background className="background"/>
		    	{
		    		route === 'home' 
		    		? <div></div>
		    		: (
		    			route == 'signin'
		    			? <Register />
		    			: <Tab />
		    		  )
		    	}
		  	</div> 
		);
	}
}

export default App;
