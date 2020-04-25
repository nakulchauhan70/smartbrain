import React from  'react';
import './Collapse.css'

class Collapse extends React.Component {

	constructor() {
		super();
	}

	collapse = (showCollapse) => {
		var showCollapse, hideCollapse;
		if(showCollapse === 'collapse1') {
			showCollapse = this.refs.collapse1;
			hideCollapse = this.refs.collapse2;
		}

		if(showCollapse === 'collapse2') {
			showCollapse = this.refs.collapse2;
			hideCollapse = this.refs.collapse1;
		}
		
		var showCollapseChildren = showCollapse.children;
	    var showSmartContentdiv = showCollapseChildren[2];	
	    var showSignDiv = showCollapseChildren[1].lastElementChild;	//lastElementChild of childern[0](label) is p#sign
	    
	    if(showSmartContentdiv.style.display === 'block') {
	    	if(showSignDiv.innerHTML === '-') {
				showSignDiv.innerHTML = '+';
			}
			showSmartContentdiv.style.display = 'none';
			return;
		}	

		showSmartContentdiv.style.display = 'block';
		if(showSignDiv.innerHTML === '+') {
			showSignDiv.innerHTML = '-';
		}
		
		var hideCollapse 
		var hideCollapseChildren = hideCollapse.children;
	    var hideSmartContentdiv = hideCollapseChildren[2];
	    var hideSignDiv = hideCollapseChildren[1].lastElementChild;

	    hideSmartContentdiv.style.display = 'none';
	    hideSignDiv.innerHTML = '+';

	}

	render() {
		return (
			<div className = "collapse-container">
				<div className = "collapse1" ref="collapse1">
					<input type="checkbox" id="title1" onClick={() => this.collapse('collapse1') } />
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

				<div className="collapse2" ref="collapse2">
					<input type="checkbox" id="title2" onClick={() => this.collapse('collapse2') } />
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