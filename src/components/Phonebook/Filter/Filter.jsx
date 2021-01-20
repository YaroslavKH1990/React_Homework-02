import React from 'react';

const Filter = ({ changeFilter, value }) => {
	return (
		<label>
			<input onChange={changeFilter} value={value} type="text" />
		</label>
	);
};

export default Filter;
