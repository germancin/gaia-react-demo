import React, { Component } from 'react';
import thumb from '../../assets/img/thumb-up.png';

class Videotiles extends Component {
	
	render() {
		return (
			<li className="videotile mb-3">

				<div className='videotile-image'>
					<img
					 src={this.props.hero_image_withtext.hero_320x200}
					 alt={this.props.title} />
				</div>
				
				<section className='meta-container'>
					<div>
						<div className='meta-serie-title'>
							{
								(this.props.series !== undefined) 
								?this.props.series.title 
								:''
							}
						</div>

						<div className='meta-title pt-1'>
							{
								(this.props.title !== undefined) 
								?this.props.title
								:''
							}
						</div>

						<div className='meta-serie'>
							{
								(this.props.type === 'product_series')
								?this.props.total_seasons + ' seasons, ' + this.props.total_episodes + ' Episodes'
								:''
							}
						</div>

						<div className='meta-duration mt-1'>
							{
								(this.props.preview !== undefined)
								?this.props.preview.duration + ' mins'
								:''
							}	
						</div>
					</div>

					<div className='meta-stats-container'>

						<div className='counter pt-1'>
							<img className='thumb-up' src={thumb} alt='thumb' />
							{this.props.fivestar.up_count.value}
						</div>
						<div className='more'>
							MORE
						</div>

					</div>
				</section>
				
			</li>
		);
	}
}

export default Videotiles;
