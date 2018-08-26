import React, { Component } from 'react';
import spinner from '../../assets/img/spinner.gif';
import '../../assets/styles/site.css';

class Spinner extends Component {
	render() {
		return (
			<div className='spinner-container'> 
                <img  className='spinner-img' src={spinner} alt='spinner' />
			</div>
		);
	}
}

export default Spinner;
