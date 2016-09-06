import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Hello from './components/hello'

// Render the main component into the dom
ReactDOM.render(
	<div>
		<App /><Hello />
	</div>, document.getElementById('app'));
