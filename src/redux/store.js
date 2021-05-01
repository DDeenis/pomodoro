import { combineReducers, createStore, applyMiddleware } from "redux";
import sagaCreator from "redux-saga";
import clockReducer from "./clockReducer";
import headerReducer from "./headerReducer";
import progressBarReducer from "./progressBarReducer";
import rootSaga from "./sagas";

const sagaMiddleware = sagaCreator();

const reducers = combineReducers({
    clock: clockReducer,
    progressBar: progressBarReducer,
    header: headerReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;