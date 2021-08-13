import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Organized from './Organized';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/organized' component={Organized} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
