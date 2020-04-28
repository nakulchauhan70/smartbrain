import React from 'react';
import './SignIn.css';

const SignIn = () => {
	const socialMedia = ['facebook.png', 'twitter.png', 'linkedin.png', 'instagram.png']
	let images = socialMedia.map(image => {
		return <li><img key={image} src={require(`../images/${image}`)} alt="" /></li>
	})
	return(
        <div class="form">
            <h2>Sign In</h2>
            <label class="form-label">
                <span>Email Address</span>
                <input type="email" name="email" class="email"/>
            </label>
            <label class="form-label">
                <span>Password</span>
                <input type="password" name="password" class="password"/>
            </label>
            <button type="button" class="submit">Sign In</button>
            <p class="forgot-pass">Forgot Password?</p>

            <div class="social-media">
                <ul>
                    { images }
                </ul>
            </div>
        </div>
	)
}

export default SignIn;