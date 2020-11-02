import React, { Component } from 'react';
import StatesList from './StatesList';

import '../styles/global.css';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<StatesList />
			</div>
		);
	}
}

export default App;
