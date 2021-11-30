import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index';
require('dotenv/config');

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose,
	logger = createLogger({
		predicate: (getState, action) => {
			if(process.env.REACT_APP_ENVIRONMENT === 'development') {
				return true; 
			} else {
				return false;
			}
		},
	});

export default function configureStore(initialState) {
	const enhancers = composeEnhancers(
		applyMiddleware(
			logger,
		),
	);

	const store = initialState
		? createStore(allReducers, initialState, enhancers)
		: createStore(allReducers, enhancers);

	return store;
}

export const appStore = configureStore();
