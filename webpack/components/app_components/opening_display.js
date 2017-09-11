import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class OpeningDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.onClickHandler = this.onClickHandler.bind(this)
	}

	onClickHandler(e){
		//e.preventDefault();
		//e.stopPropagation();
		this.props.onClick(e.target.id)
	}

	

	render() {
		console.log('hey')
		return (
	        <div id="opening-display">
		        <div id="options">
			        <a href='###' onClick={this.onClickHandler} className="row" id="webpages-option">
			            <div id="webpages-button" className="option col text-center btn-lg">
			                Webpages
			            </div>
			        </a>
			        <a href='#' onClick={this.onClickHandler} className="row" id="codepens-option">
			            <div id="codepens-button" className="option col text-center btn-lg">
			                Codepens
			            </div>
			        </a>
		        </div>
	        </div>
        )
	}
}

export default OpeningDisplay;