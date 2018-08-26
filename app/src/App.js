import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/index';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Spinner from './components/spinner/Spinner';
import Content from './components/content/Content';
import LoadMore from './components/content/LoadMore';
import Selectmenu from './components/selectmenu/Selectmenu';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/site.css';

class App extends Component {

	componentDidMount() {
        this.props.getData();
	}

	render() {
		return (
			<div className="site">
				<Header />
				{
					(this.props.fetching)
					? <Spinner />
					: <div>
					    <Hero />
						<Selectmenu />
						<Content />
						<LoadMore />
					  </div>
				}	
			</div>
		);
	}
}

const mapStateToProps = state => {
    const {subCategory} = state;
    return {
		fetching: subCategory.fetching,
    }
};

export default connect(mapStateToProps, {getData})(App);
