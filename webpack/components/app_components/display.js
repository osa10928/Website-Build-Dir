import React from 'react';
import OpeningDisplay from './opening_display';
import displayData from '../../../src/portassets/data/portfolio_data.json';
/*
class Display extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			display : "OpeningDisplay"
		}
		this.changeDisplayState = this.changeDisplayState.bind(this)
		this.configureDisplay = this.configureDisplay.bind(this)
	}

	changeDisplayState(display){
		if (display != this.state.display){
			this.setState({
				display: display
			})
		}
	}

	componentDidMount(){
		this.configureDisplay()
	}

	componentDidUpdate(prevProps, prevState){
		this.configureDisplay()
	}

	render() {
		return (
			<{this.configureDisplay} onClick={this.changeDisplayState}/>
		)
	}
}

export default Display;
*/