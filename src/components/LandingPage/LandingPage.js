import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {

	toggle = (routeAction) => {
		console.log("routeAction",routeAction)
		var header = this.refs.header;
		header.style.transform = "translateY(-180%)";
		header.style.transitionDuration= "1s";
  		// header.style.transitionDelay= "1.5s";

  		var mainContent = this.refs.mainContent;
  		mainContent.style.transform = "translateY(180%)";
		mainContent.style.transitionDuration= "1s";
		mainContent.style.opacity= "0";

		this.props.onRouteChangeProxy(routeAction);
	}

	render(){
		return (
			<div>
				<div class="landing-page">
			      <div class="page-content">
				      <div ref="header">
				      		<h1>Smart <span>Brain</span></h1>
				      </div>
				      <div ref="mainContent">
				      		<p>Created By XYZ</p>
					        <button type="button" class="btn-signin"  onClick = { () => this.toggle('showSignInPopup') }>Sign In</button>
					        <button type="button" class="btn-subscribe" onClick = { () => this.toggle('subscribe') }>Subscribe</button>
				      </div>
			      </div>
			    </div>
			</div>
		)
	}
}

export default LandingPage;