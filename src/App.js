import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import Tab from './components/Tab/Tab';

const particleOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}


function App() {
  return (
  	<div>
  		<Particles className='particles'
				params={ particleOptions }
		/>
  		<Navigation />
    	<Background className="background"/>
    	<Tab />
  	</div> 
  );
}

export default App;
