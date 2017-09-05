import React from 'react';
import { Collapse, Button, CardBlock, Card } from 'reactstrap';
import json from '../../../src/portassets/data/portfolio_data.json';
import aboutPage from '../../../src/portassets/images/about.png';
import landingPage from '../../../src/portassets/images/landing.png';
import portfolioPage from '../../../src/portassets/images/portfolio.png';

class WebsitesDisplay extends React.Component {
	constructor(props){
		super(props)
		this.processTechnologies = this.processTechnologies.bind(this)
		this.toggle = this.toggle.bind(this);
	}

	toggle(elementId) {
        var element = document.getElementById(elementId);
        if (element.classList.contains('collapsed')) {
        	if (element.classList.contains('remove-element')) {
        		element.classList.remove('remove-element')
        	}
        	element.classList.remove('collapsed')
        	element.classList.add('show-element')
        } else {
        	element.classList.remove('show-element')
        	element.classList.add('remove-element')
        	element.classList.add('collapsed')
        }
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
			var hidden = {
				maxHeight: "0px",
				overflow: "hidden"
			}
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
				<div className="webpage-element" key={i.toString()}>
				    <a onClick={() => {this.toggle(page.id)}}>
				        <div className="thumbnail">
				            <span data-text={page.name} className="text-center">
				                <p className="text-center">
				                    {page.name}
				                </p>
				            </span>
				            <img src={image} className="img-fluid" alt={page.id}/>
				        </div> 
				    </a>
				    <div className="more-info collapsed text-center" id={page.id} style={hidden}>
				        <p>{page.description}</p><br/>
				        <p>Technologies: {page.technology.join(' ')}</p>
				        <p>See webpage <a href={page.site} target="_blank">here</a>!</p>
				    </div>
				            
				</div>
			)
		});


		return (
			<div id="webpage-display">
			    <div className="d-flex flex-wrap justify-content-start technologies">
			        {techButtons}
			    </div>
			    <div className="d-flex flex-wrap justify-content-center align-items-center displayed">
			        {webpages}
			    </div>
			</div>
	    )
	}
}

export default WebsitesDisplay;