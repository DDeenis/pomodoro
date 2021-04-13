import { combineReducers, createStore } from "redux";
// import sagaCreator from "redux-saga";
import clockReducer from "./clockReducer";

// const sagaMiddleware = sagaCreator();
const reducers = combineReducers({
    clock: clockReducer
});

const store = createStore(reducers);

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run()

export default store;