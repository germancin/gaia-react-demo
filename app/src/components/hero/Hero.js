import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/hero.css';

class Hero extends Component {

	render() {
        
		return (
			<section className='hero'> 
                <img className='mobile' src={this.props.heroImg.hero_320x200} alt='mobile' />
                <img className='desktop' src={this.props.heroImg.hero_1440x300} alt='desktop' />
                
                <div className='hero-container'>
                    <h2 className='hero-title'>{this.props.heroCopy.name}</h2>
                    <div className='hero-copy mt-3'>{this.props.heroCopy.body}</div>
                </div>
			</section>
		);
	}
}

const mapStateToProps = state => {
    const {subCategory} = state;
    return {
        heroCopy: subCategory.term,
        heroImg: subCategory.heroImg, 
    }
};

export default connect(mapStateToProps, {})(Hero);
