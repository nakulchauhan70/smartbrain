import React from 'react';
import './SignUp.css';

const SignUp = () => {
	const socialMedia = ['facebook.png', 'twitter.png', 'linkedin.png', 'instagram.png']
	let images = socialMedia.map(image => {
		return <li><img key={image} src={require(`../images/${image}`)} alt="" /></li>
	})
	return(
        <div class="form">
            <h2>Sign Up</h2>
            <label class="form-label">
                <span>Name</span>
                <input type="text" name="name" class="name"/>
            </label>
            <label class="form-label">
                <span>Email Address</span>
                <input type="email" name="email" class="email"/>
            </label>
            <label class="form-label">
                <span>Password</span>
                <input type="password" name="password" class="password"/>
            </label>
            <label class="form-label">
                <span>Confirm Password</span>
                <input type="password" name="password" class="confirm-password"/>
            </label>
            <button type="button" class="submit">Sign Up</button>

            <div class="social-media">
                <ul>
                    { images }
                </ul>
            </div>
        </div>
	)
}

export default SignUp;