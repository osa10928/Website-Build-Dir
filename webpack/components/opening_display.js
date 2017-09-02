import React from 'react';


class OpeningDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.onClickHandler = this.onClickHandler.bind(this)
	}

	onClickHandler(){
		console.log("heyyy")
	}

	render() {
		return (
			<div id="opening-display">
			    <div id="options">
			        <a href='#' className="row" id="webpages-option">
			            <div className="option col text-center btn-lg" onClick={this.onClickHandler}>
			                Webpages
			            </div>
			        </a>
			        <a href='#' className="row" id="codepens-option">
			            <div className="option col text-center btn-lg">
			                Codepens
			            </div>
			        </a>
			    </div>
			</div>
		)
	}
}

export default OpeningDisplay;