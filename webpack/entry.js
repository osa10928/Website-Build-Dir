import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

class App extends React.Component {
	render() {
		return (
			<Hello />
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'));