import React from 'react';


class Opening extends React.Component {
	render() {
		return (
			<div id="opening">
			    <heading id="opening-title" className="row text-center">
			        <h1 className="col">
			           Web Portfolio
			        </h1>
			    </heading>
			    <div id="options">
			        <a href='#' className="row" id="webpages-option">
			            <div className="option col text-center">
			                Webpages
			            </div>
			        </a>
			        <a href='#' className="row" id="codepens-option">
			            <div className="option col text-center">
			                Codepens
			            </div>
			        </a>
			    </div>
			</div>
		)
	}
}

export default Opening;