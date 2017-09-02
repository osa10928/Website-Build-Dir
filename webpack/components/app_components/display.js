import React from 'react';
import OpeningDisplay from './opening_display';
import displayData from '../../../src/portassets/data/portfolio_data.json';

class Display extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<OpeningDisplay />
		)
	}
}

export default Display;