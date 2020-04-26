import React from 'react';
import './FaceRecognition.css'

const ImageLinkForm = () => {

	return (
		<div>
			<p className='f3 center'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div className="content-description">
				<input type="text" name="" />
				<button onClick="#">Detect</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;