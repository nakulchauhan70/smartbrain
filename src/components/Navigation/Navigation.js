import React from 'react';

const Navigation = ({ onRouteChangeProxy, isSignedInProxy}) => {

	return (
		<div>
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				{
					isSignedInProxy 
						? <p className='f3 link dim red underline pointer' onClick = { () => onRouteChangeProxy('signout')}>SignOut</p>
						: <p className='f3 link dim red underline pointer' onClick = { () => onRouteChangeProxy('signin')}>SignIn</p>
				}
			</nav>
		</div>
	)

}

export default Navigation;