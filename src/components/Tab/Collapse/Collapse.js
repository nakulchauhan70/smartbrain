import React from  'react';
import './Collapse.css'

class Collapse extends React.Component {

	constructor() {
		super();

		this.state = {
			isFaceRecognitrionCollapsed: false,
			isSpeechRecognitionCollapsed: false
		}
	}


	collaspeFaceRecognition() {
		this.setState({
			isFaceRecognitrionCollapsed: true,
			isSpeechRecognitionCollapsed: false
		})
	}

	collapseSpeechRecognition() {
		this.setState({
			isFaceRecognitrionCollapsed: false,
			isSpeechRecognitionCollapsed: true
		})
	}


	collapse = (showContent, hideContent1) => {
		// alert("cddwcw",this.attributes.collapse1);

		// var showCon = ReactDOM.findDOMNode(showContent);
		// console.log("showCon,", ReactDOM.findDOMNode({ showContent }));
 
		var showContent = document.getElementsByClassName(showContent)[0];
		if(showContent.style.display === 'block') {
			showContent.style.display = 'none';
			return;
		}	

		showContent.style.display = 'block';
		var hideContent1 = document.getElementsByClassName(hideContent1)[0];
		hideContent1.style.display = 'none';
	}

	render() {
		const { isFaceRecognitrionCollapsed, isSpeechRecognitionCollapsed } = this.state;
		return (
			<div class="content-container">
				<div id="content1" class="content">	
					<div class = "collapse-container">
						<div class = "collapse1">
							<input type="checkbox" id="title1" onClick={ this.collaspeFaceRecognition } />
	      					<label for="title1">
	      						<p id="header">Face Recognition</p>
	      						<p id="sign">+</p>
	      					</label>

							<div class="smartContent">
								<h1>Face Recognition</h1>
								<div class="content-description">
									<input type="text" name="" />
									<button onClick="#">Detect</button>
								</div>
							</div>
						</div>

						<div class="collapse2">
							<input type="checkbox" id="title2" onClick={ this.collapseSpeechRecognition } />
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

				<div id="content2" class="content" ref='content2'>
					<h1>Face Recognition 2</h1>
					<div class="content-description">
						<input type="text" name="" />
						<button onClick="#">Detect</button>
					</div>
				</div>
			</div>
	);
	}
	
}

export default Collapse;