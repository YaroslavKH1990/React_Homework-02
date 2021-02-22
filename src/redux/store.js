import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phoneReducers from './Phonebook/phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
	reducer: {
		phonebook: phoneReducers
	},
	middleware,
	devTools: process.env.NODE_ENV === 'development'
});

export default store;
