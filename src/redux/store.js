import { createStore, applyMiddleware } from "redux";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import sagaCreator from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = sagaCreator();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['header']
}
const reducers = persistCombineReducers(persistConfig, rootReducer);

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;