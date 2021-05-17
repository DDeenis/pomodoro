import { all, put, takeEvery } from "redux-saga/effects";
import { changeClockStateCreator, updateTimeCreator } from "./clockReducer";
import { clockStates } from "./clockStates";

const ON_STOP_ASYNC = 'ON_STOP_ASYNC';

function* onStopAsync() {
    yield put(changeClockStateCreator(clockStates.STOP));
    yield put(updateTimeCreator(0));
}

function* watchOnStop() {
    yield takeEvery(ON_STOP_ASYNC, onStopAsync);
}

export default function* rootSaga() {
    yield all([
        watchOnStop()
    ]);
}

export const onStopAsyncCreator = () => ({ type: ON_STOP_ASYNC });