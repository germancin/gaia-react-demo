import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSortedData, setSelectValue } from '../../actions/index';
import '../../assets/styles/select.css';

class Selectmenu extends Component {

	handleOnChange = (e) => {

		const criteria = e.target.value;
		this.props.getSortedData(criteria);
		this.props.setSelectValue(criteria);

	}

	render() {
		return (
			<div className="select-container px-3 py-3">
				<div className='select-title'>
					SORT BY
				</div>
				<div className='select-wrapper'>
					<select className='custom-select' value={this.props.selectValue} onChange={(e)=>{this.handleOnChange(e)}}>
						<option value="recomended">Recomended</option>
						<option value="popular">Most popular</option>
						<option value="newest">Recently Added</option>
						<option value="asc">Alphabetical</option>
					</select>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    const {subCategory} = state;
    return {
		selectValue: subCategory.select,
    }
};

export default connect(mapStateToProps, {getSortedData, setSelectValue})(Selectmenu);
