import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/content.css';
import VideoTile from './Videotile';

class Content extends Component {
	
	render() {
		return (
			<section className="content-container">
				<div className='content-suggest pb-3 pl-3'>
					We suggest you start here
				</div>
				<div>
					<ul className='video-container'>
						{
							(this.props.initialTiles[0] !== undefined) ?

								this.props.initialTiles[0].map((item, i) => { 

									return <VideoTile {...item} key={i} />

								})

							:''
						}
					</ul>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
    const {subCategory} = state;
    return {
        initialTiles: subCategory.initialTiles,
    }
};

export default connect(mapStateToProps, {})(Content);
