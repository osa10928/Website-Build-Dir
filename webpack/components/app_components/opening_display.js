import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class OpeningDisplay extends React.Component {

	

	

	render() {
		console.log('hey')
		return (
	        <div id="opening-display">
		        <div id="options">
		            <Link to="/webpages">
			            <a href='###' className="row" id="webpages-option">
			                <div id="webpages-button" className="option col text-center btn-lg">
			                   Webpages
			                </div>
			            </a>
			        </Link>
			        <Link to="/codepens">
			            <a href='#' className="row" id="codepens-option">
			                <div id="codepens-button" className="option col text-center btn-lg">
			                    Codepens
			                </div>
			            </a>
			        </Link>
		        </div>
	        </div>
        )
	}
}

export default OpeningDisplay;