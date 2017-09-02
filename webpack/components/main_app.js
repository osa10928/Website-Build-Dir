import React from 'react';
import OpeningTitle from './app_components/opening_title';
import OpeningDisplay from './app_components/opening_display';
import WebsitesTitle from './app_components/websites_title';
import CodepensTitle from './app_components/codepens_title';
import Display from './app_components/display';


class MainApp extends React.Component {
	render() {
		return (
			<main className="container-fluid">
			    <section id="main-info">
			        <OpeningTitle />
			    </section>
			    <section id="main-display">
			        <OpeningDisplay />
			    </section>
			</main>
		)
	}
}

export default MainApp;