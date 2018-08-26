import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/content.css';
import VideoTile from './Videotile';

class LoadMoreContent extends Component {

	state = {
		indexChunk: 0,
		maxIndexChunk: 0,
		loadMoreRecords: true,
		moreTiles: [],
	}

	componentDidMount() {
		if(this.props.moreTiles !== undefined){
			this.setState({maxIndexChunk: this.props.moreTiles.length});
		}
	}

	handleClick = (index) => {
		const copyOfmoreTilesState = [...this.state.moreTiles]; // copy of the state to keep inmutability.
		this.setState({ moreTiles: [...copyOfmoreTilesState, ...this.props.moreTiles[index]] }); 
		const nextIndex = ++index;
		this.setState({indexChunk: nextIndex});

		if(nextIndex  === this.state.maxIndexChunk){
			this.setState({loadMoreRecords: false});
		}
	}
	
	render() {

		return (
			<section className="content-container mb-5">
					<ul className='video-container'>
						{
							(this.state.moreTiles.length !== 0) ?

								this.state.moreTiles.map((item, i) => { 

									return <VideoTile {...item} key={i} />

								})

							:''
						}
					</ul>
					<div className='loadmore-btn-wrapper'> 
						{
							(this.state.loadMoreRecords)
							?<button className='loadmore-btn' onClick={()=>{this.handleClick(this.state.indexChunk)}} > LOAD MORE </button>
							:''
						}
					</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
    const {subCategory} = state;
    return {
        moreTiles: subCategory.moreTiles,
    }
};

export default connect(mapStateToProps, {})(LoadMoreContent);
