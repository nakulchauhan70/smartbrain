import React from 'react';
import './Register.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import LandingPage from '../../LandingPage/LandingPage';

class Register extends React.Component {

	constructor() {
		super();

		this.state = {
			containerVisible: true
		}

		this.setWrapperRef = this.setWrapperRef.bind(this);
	    this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	  componentDidMount() {
	    document.addEventListener('mousedown', this.handleClickOutside);
	  }

	  componentWillUnmount() {
	    document.removeEventListener('mousedown', this.handleClickOutside);
	  }

	  /**
	   * Set the wrapper ref
	   */
	  setWrapperRef(node) {
	    this.wrapperRef = node;
	  }

	  /**
	   * Alert if clicked on outside of element
	   */
	  handleClickOutside(event) {
	    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
	    	var containerWrapper = this.wrapperRef;
	    	containerWrapper.style.opacity = "0";
	    	containerWrapper.style.width = "0";
	    	containerWrapper.style.height = "0";
	    	containerWrapper.style.overflow="hidden"
	    	containerWrapper.style.transition = "width 0.5s 0.5s, height 0.5s 0.5s, overflow 0.5s 0.5s, opacity 0.5s";
	    }
	  }

	showSignIn = () => {
		var signin = this.refs.sigin;
		var signup = this.refs.signup;
		var signinDesc = this.refs.signinDecs;
		var signupDesc = this.refs.signupDecs;

		signinDesc.style.transform = "translateX(10%)";
		signinDesc.style.transitionDuration = "1s";
		signinDesc.style.zIndex = "-1";
		signinDesc.style.opacity = "-1";

		signup.style.transform = "translateX(0px)";
		signup.style.transitionDuration = "1s";
		signup.style.zIndex = "-1";
		signup.style.opacity = "-1";

		signupDesc.style.transform = "translateX(0)";
		signupDesc.style.transitionDuration = "1s";
		signupDesc.style.zIndex = "0";
		signupDesc.style.opacity = "1";

		signin.style.transform = "translateX(0px)";
		signin.style.transitionDuration = "1s";
		signin.style.opacity = "1";
	}

	showSignUp = () => {
		var signin = this.refs.sigin;
		var signup = this.refs.signup;
		var signinDesc = this.refs.signinDecs;
		var signupDesc = this.refs.signupDecs;

		signupDesc.style.transform = "translateX(-10%)";
		signupDesc.style.transitionDuration = "1s";
		signupDesc.style.zIndex = "-1";
		signupDesc.style.opacity = "-1";

		signin.style.transform = "translateX(10%)";
		signin.style.transitionDuration = "1s";
		signin.style.opacity = "-1";

		signinDesc.style.transform = "translateX(-33%)";
		signinDesc.style.transitionDuration = "1s";
		signinDesc.style.zIndex = "1";
		signinDesc.style.opacity = "1";

		signup.style.transform = "translateX(43%)";
		signup.style.transitionDuration = "1s";
		signup.style.zIndex = "2";
		signup.style.opacity = "1";

	}

	render() {
		return(
			<div class="register" id="register" ref={this.setWrapperRef}>
				<div class="signin" ref="sigin"><SignIn /></div>
				<div class="signup" ref="signup"><SignUp /></div>
				<div class="signin-desc" ref="signinDecs">		
					<h1>Welcome Back!</h1>
					<p>To keep connected with us please login with your personal info</p>
					<button class="signInBtn" onClick={ this.showSignIn }>Sign In</button>
				</div>
				<div class="signup-desc" ref="signupDecs">
					<h1>Hello, Friend!</h1>
					<p>Enter your personal details and start journey with us</p>
					<button class="signUpBtn" onClick={ this.showSignUp }>Sign Up</button>
				</div>
			</div>
		)
	}
}

export default Register;