import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/main_app';
import Navbar from './components/navbar';

class App extends React.Component {
	render() {
		return (
			<section>
			    <header>
			        <Navbar />
			    </header>
			    <main className="container-fluid">
			        <MainApp />
			    </main>
			</section>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'));