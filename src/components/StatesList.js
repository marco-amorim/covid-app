import React, { Component } from 'react';
import covidApi from '../apis/covidAPI';

import '../styles/stateslist.css';

class StatesList extends Component {
	state = { statesData: [] };

	componentDidMount() {
		covidApi.get('/api/report/v1').then((response) => {
			const { data } = response.data;
			this.setState({ statesData: data });
		});
	}

	renderStatesList() {
		return this.state.statesData.map((item, index) => {
			let position = index + 1;
			return (
				<tr key={item.uid}>
					<th scope="row">{position}</th>
					<td>
						{item.state} - {item.uf}
					</td>
					<td>
						<span className="safe">{item.cases}</span>
					</td>
					<td>
						<span className="warning">{item.suspects}</span>
					</td>
					<td>
						<span className="danger">{item.deaths}</span>
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div id="states-list">
				<table className="table table-dark">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Estado</th>
							<th scope="col">Casos Totais</th>
							<th scope="col">Suspeitas</th>
							<th scope="col">Mortes</th>
						</tr>
					</thead>
					<tbody>{this.renderStatesList()}</tbody>
				</table>
			</div>
		);
	}
}

export default StatesList;
