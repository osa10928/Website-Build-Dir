import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';
import Navbar from './components/navbar';

class App extends React.Component {
	render() {
		return (
			<section>
			  <header>
			    <Navbar />
			  </header>
			  <Hello />
			</section>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'));