import React from  'react';
import './Tab.css';

class Tab extends React.Component {

	// constructor() {
	// 	super();
	// 	this.attributes = {
	// 		content1: document.getElementById("content1"),
	// 		content2: document.getElementById("content2"),
	// 		btn1: document.getElementById("braintab"),
	// 		btn2: document.getElementById("gallerytab")
	// 	}

	// 	this.openSmartBrain = this.openSmartBrain.bind(this);
	// 	this.openGallery = this.openGallery.bind(this);
	// 	this.collapse = this.collapse.bind(this);
		
	// }

	openSmartBrain = () => {
		var content1 = this.refs.content1;
		var content2 = this.refs.content2;
		var btn1 = this.refs.btn1;
		var btn2 = this.refs.btn2;

		content1.style.transform = "translateX(0px)";
		content2.style.transform = "translateX(100%)";
		content1.style.transitionDelay = "0.3s";
		content2.style.transitionDelay = "0s";	
		btn1.style.color = "maroon"
		btn1.style.background = "linear-gradient(to right, rgb(192, 192, 192), rgb(50, 99, 96))"
		btn2.style.color = "teal"
		btn2.style.background = "transparent"
	}

	openGallery = () => {
		var content1 = this.refs.content1;
		var content2 = this.refs.content2;
		var btn1 = this.refs.btn1;
		var btn2 = this.refs.btn2;
		content1.style.transform = "translateX(100%)";
		content2.style.transform = "translateX(0px)";
		content1.style.transitionDelay = "0s";
		content2.style.transitionDelay = "0.3s";	
		btn1.style.color = "teal"
		btn1.style.background = "transparent"
		btn2.style.color = "maroon"
		btn2.style.background = "linear-gradient(to right, rgb(192, 192, 192), rgb(50, 99, 96))"
		btn2.style.borderTopRightRadius= "5px"

	}

	render() {
		return (
			<div class="navtab">
				<div class="btn-box">
					<button id="braintab" onClick={ this.openSmartBrain } ref = "btn1" >
						<i class="fa fa-rocket" aria-hidden="true"></i>
						Smart brain
					</button>
					<button id="gallerytab" onClick={ this.openGallery } ref = "btn2" >
						<i class="fa fa-picture-o" aria-hidden="true"></i>
						Gallary
					</button>
				</div>
				<div class="content" id="content1" ref="content1">	
					<div class="collapse-container">
						<div class="collapse1">
							<input type="checkbox" id="title1" onclick="collapse('collapse1', 'collapse2')" />
	      					<label for="title1">
	      						<p id="header">Face Recognition</p>
	      						<p id="sign">+</p>
	      					</label>

							<div class="smartContent">
								<h1>Face Recognition</h1>
								<div class="content-description">
									<input type="text" name="" />
									<button onclick="#">Detect</button>
								</div>
							</div>
						</div>

						<div class="collapse2">
							<input type="checkbox" id="title2" onclick="collapse('collapse2', 'collapse1')" />
	      					<label for="title2">
	      						<p id="header">Speech Recognition</p>
	      						<p id="sign">+</p>
	      					</label>

							<div class="smartContent">
								<p>Your smartContent goes here.</p>
							</div>
						</div>  
					</div>
				</div>

				<div class="content" id="content2" ref="content2">
					<h1>Face Recognition 2</h1>
					<div class="content-description">
						<input type="text" name="" />
						<button onclick="#">Detect</button>
					</div>
				</div>
			</div>
		);
	}

}

export default Tab;