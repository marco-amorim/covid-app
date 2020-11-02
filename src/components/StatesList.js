import React, { Component } from 'react';
import covidApi from '../apis/covidAPI';

import '../styles/stateslist.css';

class StatesList extends Component {
	state = { statesList: [] };

	componentDidMount() {
		covidApi.get('/api/report/v1').then((response) => {
			const { data } = response.data;
			this.setState({ statesList: data });
			console.log(data);
			console.log(this.state.statesList);
		});
	}

	render() {
		return (
			<ul className="list-unstyled">
				{this.state.statesList.map((item) => (
					<li key={item.uid}>{item.state}</li>
				))}
			</ul>
		);
	}
}

export default StatesList;
