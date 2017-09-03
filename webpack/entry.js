import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainApp from './components/main_app';
import Navbar from './components/navbar';

class App extends React.Component {
	render() {
		return (
			<section>
			    <header>
			        <Navbar />
			    </header>
			    <main>
			        <Router basename="/portfolio">
			            <MainApp />
			        </Router> 
			    </main>
			</section>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'));