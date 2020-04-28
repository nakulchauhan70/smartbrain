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
	showSignInPopup: true
}


class App extends Component {

	constructor() {
		super();
		this.state = initialState;
	}

	onRouteChange = (route) => {
		console.log("route", route);
		if(route === 'signin') {
			this.setState({
				isSignedIn: true,
				// showSignInPopup: true		//needs to be removed later
			})
		}

		if(route === 'signinpopup') {
			this.setState({
				showSignInPopup: false
			})
		}

		if(route === 'signout') {
			this.setState({
				showSignInPopup: true,
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
		  		<Navigation openSignInPopupProxy = { showSignInPopup } isSignedInProxy = { isSignedIn } onRouteChangeProxy = {this.onRouteChange}/>
		    	<Background className="background"/>
		    	{
		    		route === 'signinpopup'
		    		? <Register />
		    		: ( route === 'home' 
		    			? <div></div>
		    			: <Tab />)
		    	}
		  	</div> 
		);
	}
}

export default App;
