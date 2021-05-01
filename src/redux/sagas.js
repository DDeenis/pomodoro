import { all, put, takeEvery } from "redux-saga/effects";
import { actionTypes, changeClockStateCreator, clockStates, updateTimeCreator } from "./actionCreators";

function* onStopAsync() {
    yield put(changeClockStateCreator(clockStates.STOP));
    yield put(updateTimeCreator(0));
}

function* watchOnStop() {
    yield takeEvery(actionTypes.ON_STOP_ASYNC, onStopAsync);
}

export default function* rootSaga() {
    yield all([
        watchOnStop()
    ]);
}