import React, { Component } from 'react';
import covidApi from '../apis/covidAPI';

import '../styles/header.css';

class Header extends Component {
	state = { countryData: {} };

	componentDidMount() {
		covidApi.get('/api/report/v1/brazil').then((response) => {
			const { data } = response.data;
			this.setState({ countryData: data });
		});
	}

	renderCountryData() {
		return (
			<ul className="list-unstyled">
				<li>
					Casos Confirmados:{' '}
					<span className="safe">{this.state.countryData.confirmed}</span>
				</li>
				<li>
					Casos Recuperados:{' '}
					<span className="safe">{this.state.countryData.recovered}</span>
				</li>
				<li>
					Casos Ativos:{' '}
					<span className="warning">{this.state.countryData.cases}</span>
				</li>
				<li>
					Mortes:{' '}
					<span className="danger">{this.state.countryData.deaths}</span>
				</li>
			</ul>
		);
	}

	render() {
		return (
			<div id="header">
				<div className="row">
					<h1>Brasil</h1>
				</div>
				<div className="row">{this.renderCountryData()}</div>
			</div>
		);
	}
}

export default Header;
