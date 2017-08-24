import React from 'react';
import ReactDOM from 'react-dom';
import Opening from './components/opening';
import Navbar from './components/navbar';

class App extends React.Component {
	render() {
		return (
			<section>
			  <header>
			    <Navbar />
			  </header>
			  <main className="container-fluid">
			    <Opening />
			  </main>
			</section>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'));