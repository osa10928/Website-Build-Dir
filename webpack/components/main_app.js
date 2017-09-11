import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OpeningTitle from './app_components/opening_title';
import OpeningDisplay from './app_components/opening_display';
import WebpagesTitle from './app_components/webpages_title';
import WebpagesDisplay from './app_components/webpages_display';
import CodepensTitle from './app_components/codepens_title';
import CodepensDisplay from './app_components/codepens_display';


class MainApp extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.transitionHide = this.transitionHide.bind(this)
		this.transitionShow = this.transitionShow.bind(this)
		this.transitionEndEventName = this.transitionEndEventName.bind(this)
		this.removeEvent = this.removeEvent.bind(this)
	}

	transitionEndEventName () {
        var el = document.createElement('div')//what the hack is bootstrap

        var transEndEventNames = {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            transition       : 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }
        return false // explicit for ie8 (  ._.)
    }

	handleClick(destination) {
		switch (destination) {
			case 'webpages-button':
			    this.transitionHide('webpages-route')
			    break;

			case 'codepens-button':
			    this.transitionHide('codepens-route')
			    break;
		}
	}

	transitionHide(route){
		console.log('called')
		var app = document.getElementById('App')
		var transitionEnd = this.transitionEndEventName()
		app.addEventListener(transitionEnd, this.removeEvent(route), false)
		app.classList.contains('show-element') ? app.classList.remove('show-element') : null
		app.classList.add('remove-element')
	}

	transitionShow() {
		var app = document.getElementById('App')
		setTimeout(function(){
			app.classList.contains('remove-element') ? app.classList.remove('remove-element') : null
		    app.classList.add('show-element')
		}, 500)
	}

	removeEvent(route) {
		console.log('call-me')
		
		var app = document.getElementById('App')
		var transitionEnd = this.transitionEndEventName()
		app.removeEventListener(transitionEnd, () => {this.removeEvent(route); }, false)
		setTimeout(function(){
			document.getElementById(route).click();
		}, 500)
	}
	
	componentDidUpdate() {
		var app = document.getElementById('App')
		if (window.getComputedStyle(app)['max-height'] == '0px') {
			this.transitionShow()
		}
	}

	render() {
		console.log('lol')
		return (
			<div className="container-fluid" id="main-container">
			    <div id="route-buttons">
	                <Link to="/webpages">
	                    <button id="webpages-route"></button>
	                </Link>
	                <Link to='/codepens'>
	                    <button id="codepens-route"></button>
	                </Link>
	            </div>
			    <section id="main-info">
			        <Route exact path="/" component={OpeningTitle} />
			        <Route exact path="/webpages" component={WebpagesTitle} />
			        <Route exact path="/codepens" component={CodepensTitle} />
			    </section>
			    <section id="main-display">
			        <Route exact path="/" render={(props) => <OpeningDisplay onClick={this.handleClick} {...props} />} />
			        <Route exact path="/webpages" component={WebpagesDisplay} />
			        <Route exact path="/codepens" component={CodepensDisplay} />
			    </section>
			</div>
		)
	}
}

export default MainApp;