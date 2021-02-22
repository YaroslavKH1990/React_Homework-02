import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', ({ name, number }) => ({
	payload: {
		name,
		number,
		id: shortid.generate()
	}
}));

// const addContact = ({ name, number }) => ({
// 	type: types.ADD,
// 	payload: {
// 		name,
// 		number,
// 		id: shortid.generate()
// 	}
// });

const deleteContact = createAction('phonebook/delete');

// const deleteContact = (itemId) => ({
// 	type: types.DELETE,
// 	payload: itemId
// });

const changeFilter = createAction('phonebook/changeFilter');

// const changeFilter = (value) => ({
// 	type: types.CHANGE_FILTER,
// 	payload: value
// });

const getFilter = createAction('phonebook/getFilter');

// const getFilter = (text) => ({
// 	type: types.GET_FILTER,
// 	payload: text
// });

export default { addContact, deleteContact, changeFilter, getFilter };
