import React from 'react';
import './Register.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp'

class Register extends React.Component {

	constructor() {
		super();
	}

	openSignIn = () => {
		var container = this.refs.container;
		container.classList.remove("right-panel-active");
	}

	openSignUp = () => {
		var container = this.refs.container;
		container.classList.add("right-panel-active");
	}

	render() {
		return(
			<div class="container" id="container" ref="container">
				<div class="form-container sign-up-container">
					<SignUp />
				</div>
				<div class="form-container sign-in-container">
					<SignIn />
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button class="ghost" id="signIn" onClick={ this.openSignIn }>Sign In</button>
						</div>
						<div class="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button class="ghost" id="signUp" onClick={ this.openSignUp }>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;