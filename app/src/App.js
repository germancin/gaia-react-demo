import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/site.css';

class App extends Component {
	render() {
		return (
			<div className="site">
				<Header />
			</div>
		);
	}
}

export default App;
