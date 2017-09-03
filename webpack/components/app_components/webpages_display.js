import React from 'react';
import json from '../../../src/portassets/data/portfolio_data.json';
import aboutPage from '../../../src/portassets/images/about.png';
import landingPage from '../../../src/portassets/images/landing.png';
import portfolioPage from '../../../src/portassets/images/portfolio.png';

class WebsitesDisplay extends React.Component {
	constructor(props){
		super(props)
		this.processTechnologies = this.processTechnologies.bind(this)
	}

	processTechnologies(pages) {
		var techHash = {}
		var technologies = []
		for (var i in pages) {
			for (var j in pages[i].technology) {
			    if (!techHash[pages[i].technology[j]]) {
				    technologies.push(pages[i].technology[j])
				    techHash[pages[i].technology[j]] = 1
				}
			}
		}
		var techno = technologies.map((tech, i) => {
			return (
				<button key={i.toString()} className="techButtons">
				    {tech}
				</button>
			)
		})
		return techno
	}

	render () {

		var techButtons = this.processTechnologies(json.webpages);

		var webpages = json.webpages.map((page, i) => {
			switch (page.id) {
				case "aboutPage":
				    var image = aboutPage;
				    break;

				case "landingPage":
				    var image = landingPage;
				    break;

				case "portfolioPage":
				    var image = portfolioPage;
				    break
			}
			
			return (
				
				<div className="thumbnail">
				  <span data-text={page.name} className="text-center">
				        <p className="text-center">
				            {page.name}
				        </p>
				  </span>
				  <img src={image} className="img-fluid" key={i.toString()} alt={page.id}/>
				</div> 
				
			)
		});
		console.log(techButtons)


		return (
			<div id="webpage-display">
			    <div className="d-flex flex-wrap justify-content-start technologies">
			        {techButtons}
			    </div>
			    <div className="d-flex flex-wrap justify-content-around align-items-center displayed">
			        {webpages}
			    </div>
			</div>
	    )
	}
}

export default WebsitesDisplay;