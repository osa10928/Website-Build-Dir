import React from 'react';
import json from '../../../src/portassets/data/portfolio_data.json';
import leaderboard from '../../../src/portassets/images/fccleaderboard.png';
import tictactoe from '../../../src/portassets/images/tictac.png';
import githubMarkdown from '../../../src/portassets/images/githubmarkdown.png';
import twitchApi from '../../../src/portassets/images/twitch.png';
import simongame from '../../../src/portassets/images/simongame.png';

class CodepensDisplay extends React.Component {
	constructor(props){
		super(props)
		this.processTechnologies = this.processTechnologies.bind(this)
		this.toggle = this.toggle.bind(this);
		this.buttonClick = this.buttonClick.bind(this);
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

    buttonClick(buttonId, pages) {
    	var button = document.getElementById(buttonId)
    	var pagesToShow = {}
    	
    	button.classList.contains('clicked') ? button.classList.remove('clicked') : button.classList.add('clicked')
    	var buttonsClicked = document.getElementsByClassName('clicked')

    	for (var a in pages) {
    		pagesToShow[pages[a].id] = 1
    	}

    	for (var i=0;i<buttonsClicked.length;i++) {
    		for (var j in pages) {
    		    if (!pages[j].technology.includes(buttonsClicked[i].id)) {
    			    delete pagesToShow[pages[j].id]
    		    }
    		}
    	}

    	for (var k in pages) {
    		if (!pagesToShow[pages[k].id]) {
    			var hidePage = document.getElementById(pages[k].id)
    			if (!hidePage.classList.contains('remove-element')) {
    				hidePage.classList.contains('show-element') ? hidePage.classList.remove('show-element') : null
    				hidePage.classList.add('remove-element')
    			}
    		} else {
    			var showPage = document.getElementById(pages[k].id)
    			if (!showPage.classList.contains('show-element')) {
    				showPage.classList.contains('remove-element') ? showPage.classList.remove('remove-element') : null
    				showPage.classList.add('show-element')
    			}
    		}
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
				<button id={tech} key={i.toString()} onClick={() => {this.buttonClick(tech, json.codepens)}} className="techButtons">
				    {tech}
				</button>
			)
		})
		return techno
	}


	render () {

		var techButtons = this.processTechnologies(json.codepens);

		var codepens = json.codepens.map((page, i) => {
			var hidden = {
				maxHeight: "0px",
				overflow: "hidden"
			}
			switch (page.id) {
				case "leaderboard":
				    var image = leaderboard;
				    break;

				case "githubMarkdown":
				    var image = githubMarkdown;
				    break;

				case "simonGame":
				    var image = simongame;
				    break;

				case "tictactoe":
				    var image = tictactoe;
				    break;

				case "twitchApi":
				    var image = twitchApi;
				    break;
			}
			
			return (
				<div id={page.id} className="codepens-element" key={i.toString()}>
				    <a onClick={() => {this.toggle(page.id + "-text")}}>
				        <div className="thumbnail">
				            <span data-text={page.name} className="text-center">
				                <p className="text-center">
				                    {page.name}
				                </p>
				            </span>
				            <img src={image} className="img-fluid" alt={page.id}/>
				        </div> 
				    </a>
				    <div className="more-info collapsed text-center" id={page.id + "-text"} style={hidden}>
				        <p>{page.description}</p><br/>
				        <p>Technologies: {page.technology.join(' ')}</p>
				        <p>See codepen <a href={page.site} target="_blank">here</a>!</p>
				    </div>
				            
				</div>
			)
		});

		return (
			<div id="codepens-display">
			    <div className="d-flex flex-wrap justify-content-start technologies">
			        {techButtons}
			    </div>
			    <div className="d-flex flex-wrap justify-content-center align-items-center displayed">
			        {codepens}
			    </div>
			</div>
	    )
	}
}

export default CodepensDisplay;