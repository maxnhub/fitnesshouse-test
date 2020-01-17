import { createStore } from 'redux';
import { servicesReducer } from './reducers/services';

export const store = createStore(servicesReducer);
