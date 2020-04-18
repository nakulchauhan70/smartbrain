import React from 'react';
import face from './face.png';
import './Background.css'

const Background = () => {
	return (
		<div className='background'>
			<img alt='face' src={face}/>
		</div>
		);
	}

	export default Background;