import React from 'react';
import { connect } from 'react-redux';
import phoneActions from '../../../redux/Phonebook/phonebook-action';

const Filter = ({ getFilter, value }) => {
	return (
		<label>
			<input onChange={getFilter} value={value} type="text" />
		</label>
	);
};

const mapStateToProps = (state) => ({
	value: state.phonebook.filter
});

const mapDispatchToProps = (dispatch) => ({
	getFilter: (event) => dispatch(phoneActions.getFilter(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
