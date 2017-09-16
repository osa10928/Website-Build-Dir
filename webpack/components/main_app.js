import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OpeningTitle from './app_components/opening_title';
import OpeningDisplay from './app_components/opening_display';
import WebpagesTitle from './app_components/webpages_title';
import WebpagesDisplay from './app_components/webpages_display';
import CodepensTitle from './app_components/codepens_title';
import CodepensDisplay from './app_components/codepens_display';
import CSSTransitionGroup from 'react-transition-group';


class MainApp extends React.Component {
	constructor(props){
		super(props)
	}

	

	render() {
		
		return (
			<div className="container-fluid" id="main-container">
			    
			    <section id="main-info">
			            <Switch key={location.pathname} location={location}>
			                <Route exact path="/" component={OpeningTitle} />
			                <Route exact path="/webpages" component={WebpagesTitle} />
			                <Route exact path="/codepens" component={CodepensTitle} />
			            </Switch>
			     
			    </section>
			    <section id="main-display">
			        
			            <Route exact path="/" component={OpeningDisplay} />
			            <Route exact path="/webpages" component={WebpagesDisplay} />
			            <Route exact path="/codepens" component={CodepensDisplay} />
			        
			    </section>
			</div>
		)
	}
}

export default MainApp;