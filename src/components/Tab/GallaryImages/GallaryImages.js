import React from 'react';
import './GallaryImages.css';

class GallaryImages extends React.Component {

	render() {

		let indexes = ["AI1", "AI2", "AI3", "AI4", "AI5", "AI6", "AI7", "AI8", "AI9", "AI10"];

		let images = indexes.map(image => {
           return <figure class="shadow"><img key={image} src={require(`./images/${image}.jpg`)} alt="" /></figure>
        });

		return (
			<div>
				<section class="slideshow">
			        <div class="content-container">
			            <div class="content-carrousel">
			            	{images}
			            </div>
			        </div>
			    </section>
			</div>
		)
	}

}

export default GallaryImages;