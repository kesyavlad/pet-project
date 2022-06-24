import { legacy_createStore as createStore } from 'redux';
import { cashReducer } from './reducers/addNote';

export const store = createStore(cashReducer);
