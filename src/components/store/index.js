import { legacy_createStore as createStore } from 'redux';
import { cashReducer } from './addNote';

export const store = createStore(cashReducer);
