import React from  'react';
import './Tab.css';
import FA from 'react-fontawesome';
import Collapse from './Collapse/Collapse';

class Tab extends React.Component {

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
			<div className="navtab">
				<div className="btn-box">
					<button id="braintab" onClick={ this.openSmartBrain } ref = "btn1" >
						<i className="fa fa-picture-o" aria-hidden="true"></i>
						Smart brain
					</button>
					<button id="gallerytab" onClick={ this.openGallery } ref = "btn2" >
						<i className="fa fa-picture-o" aria-hidden="true"></i>
						Gallary
					</button>
				</div>
				<div className="content" id="content1" ref="content1">	
					<Collapse className="collapse"/>
				</div>

				<div className="content" id="content2" ref="content2">
					
				</div>
			</div>
		);
	}

}

export default Tab;