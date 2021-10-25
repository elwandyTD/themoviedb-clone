import { combineReducers } from 'redux';

import testReducers from './test';
import movieReducers from './movie';

const reducers = combineReducers({
	test: testReducers,
	movie: movieReducers
});

export default reducers;