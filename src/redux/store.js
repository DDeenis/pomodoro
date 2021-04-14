import { combineReducers, createStore, applyMiddleware } from "redux";
import sagaCreator from "redux-saga";
import clockReducer from "./clockReducer";
import progressBarReducer from "./progressBarReducer";

const sagaMiddleware = sagaCreator();
const reducers = combineReducers({
    clock: clockReducer,
    progressBar: progressBarReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run();

export default store;