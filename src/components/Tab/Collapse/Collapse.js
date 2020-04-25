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
			<div className = "collapse-container">
				<div className = "collapse1">
					<input type="checkbox" id="title1" onClick={ this.collaspeFaceRecognition } />
  					<label htmlFor="title1">
  						<p id="header">Face Recognition</p>
  						<p id="sign">+</p>
  					</label>

					<div className="smartContent">
						<h1>Face Recognition</h1>
						<div className="content-description">
							<input type="text" name="" />
							<button onClick="#">Detect</button>
						</div>
					</div>
				</div>

				<div className="collapse2">
					<input type="checkbox" id="title2" onClick={ this.collapseSpeechRecognition } />
  					<label htmlFor="title2">
  						<p id="header">Speech Recognition</p>
  						<p id="sign">+</p>
  					</label>

					<div className="smartContent">
						<p>Your smartContent goes here.</p>
					</div>			
				</div>  
			</div>
		);
	}
	
}

export default Collapse;