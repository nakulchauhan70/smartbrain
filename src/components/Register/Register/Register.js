import React from 'react';
import './Register.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp'

class Register extends React.Component {

	render() {
		return(
			<div class="register">
		        <div class="signin-cont-desc" style={{'display': 'none'}}>
		        	<h2>One of us?</h2>
			        <p>If you already has an account, just sign in. We've missed you!</p>
			        <span>SIGN IN</span>
		        </div>
		        <div class="signin-cont">
		            <SignIn />
		        </div>
		        <div class="signup-cont" style={{'display': 'none'}}>
		            <SignUp />
		        </div>
		        <div class="signup-cont-desc">
					<h2>New here?</h2>
			        <p>Sign up and discover great amount of new opportunities!</p>
			        <span>SIGN UP</span>
			    </div>
			</div>
		)
	}
}

export default Register;