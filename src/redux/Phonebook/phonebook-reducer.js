import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-action';

// const contacts = (state = [], { type, payload }) => {
// 	switch (type) {
// 		case types.ADD:
// 			return [...state, payload];

// 		case types.DELETE:
// 			return state.filter(({ id }) => id !== payload);

// 		default:
// 			return state;
// 	}
// };

const contacts = createReducer([], {
	[actions.addContact]: (state, { payload }) => [...state, payload],
	[actions.deleteContact]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
	[actions.getFilter]: (_, { payload }) => payload
});

// const filter = (state = '', { type, payload }) => {
// 	switch (type) {
// 		case 'phonebook/getFilter':
// 			return payload;

// 		default:
// 			return state;
// 	}
// };

export default combineReducers({
	contacts,
	filter
});
