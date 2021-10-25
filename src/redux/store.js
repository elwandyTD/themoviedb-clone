import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import promiseMiddleware from "redux-promise-middleware";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

import reducers from "./reducers";

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: hardSet
}

const logger = createLogger();

const enchancers = applyMiddleware(promiseMiddleware, logger);

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducers, enchancers);
export const persistor = persistStore(store);
