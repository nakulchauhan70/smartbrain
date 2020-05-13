import React from 'react';
import './LandingPage.css';

const LandingPage  = ({ onRouteChangeProxy }) => {
	return (
		<div>
			<div class="landing-page">
		      <div class="page-content">
		        <h1>Smart <span>Brain</span></h1>
		        <p>Created By XYZ</p>
		        <button type="button" class="btn-register"  onClick = { () => onRouteChangeProxy('showSignInPopup') }>Sign In</button>
		        <button type="button" class="btn-subscribe"  onClick = { () => onRouteChangeProxy('subscribe') }>Subscribe</button>
		      </div>
		    </div>
		</div>
	)
}

export default LandingPage;