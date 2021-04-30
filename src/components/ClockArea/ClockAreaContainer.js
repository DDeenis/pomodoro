import React from 'react';
import { useDispatch } from 'react-redux';
import { changeClockStateCreator, clockStates, updateTimeCreator } from "../../redux/actionCreators";
import ClockArea from "./ClockArea";

function ClockAreaContainer() {
    const dispatch = useDispatch();

    // redux-saga
    const onStop = () => {
        dispatch(changeClockStateCreator(clockStates.STOP));
        dispatch(updateTimeCreator(0));
    };

    const onPause = () => dispatch(changeClockStateCreator(clockStates.PAUSE));
    const onStart = () => dispatch(changeClockStateCreator(clockStates.WORK));

    return (
        <ClockArea
            onStop={onStop}
            onPause={onPause}
            onStart={onStart}
        />
    );
}

export default ClockAreaContainer;