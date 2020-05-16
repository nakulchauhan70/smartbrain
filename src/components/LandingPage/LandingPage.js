import React from 'react';
import './LandingPage.css';
import Register from '../Register/Register/Register'

class LandingPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showRegisterPopup: false
		}
	}

	toggle = (routeAction) => {
		
		var header = this.refs.header;
		header.style.transform = "translateY(-230%)";
  		header.style.transitionDuration= "1s";

  		var mainContent = this.refs.mainContent;
  		mainContent.style.transform = "translateY(230%)";
		mainContent.style.transitionDuration= "1s";
		mainContent.style.opacity= "0";


		if(routeAction === 'showRegisterPopup') {
			this.setState({
				showRegisterPopup: true
			})
		}

		// this.props.onRouteChangeProxy(routeAction);
	}

	handleOnHideRegister = () => {
		this.setState({
			showRegisterPopup: false
		})

		var header = this.refs.header;
		header.style.transform = "translateY(0%)";
		header.style.transitionDuration= "1s";
  		// header.style.transitionDuration= "1.5s";

  		var mainContent = this.refs.mainContent;
  		mainContent.style.transform = "translateY(0%)";
		mainContent.style.transitionDuration= "1s";
		mainContent.style.opacity= "1";
	}

	render(){
		const { showRegisterPopup } = this.state;
		return (
			<div>
				<div class="landing-page">
			      <div class="page-content">
				      <div ref="header">
				      		<h1>Smart <span>Brain</span></h1>
				      </div>
				      <div ref="mainContent">
				      		<p>Created By XYZ</p>
					        <button type="button" class="btn-signin"  onClick = { () => this.toggle('showRegisterPopup') }>Sign In</button>
					        <button type="button" class="btn-subscribe" onClick = { () => this.toggle('subscribe') }>Subscribe</button>
				      </div>
			      </div>
			    </div>
			    { this.state.showRegisterPopup && <Register onHideRegister = { this.handleOnHideRegister }/> }
			</div>
		)
	}
}

export default LandingPage;