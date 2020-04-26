import React from 'react';

const Navigation = ({ openSignInPopupProxy, isSignedInProxy, onRouteChangeProxy }) => {

	return (
		<div>
			<nav style={{display: 'flex', justifyContent: 'flex-end'}} className='f3 link dim red underline pointer'>
				{
					openSignInPopupProxy 
					? <p onClick = { () => onRouteChangeProxy('signinpopup')}>SignInpo</p>
					: ( isSignedInProxy 
						? <p onClick = { () => onRouteChangeProxy('signout')}>SignOut</p>
						: <p onClick = { () => onRouteChangeProxy('signin')}>SignIn</p>
					)
				}
			</nav>
		</div>
	)

}

export default Navigation;