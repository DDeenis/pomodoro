import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeClockStateCreator, clockStates, onStopAsyncCreator } from "../../redux/actionCreators";
import ClockArea from "./ClockArea";

function ClockAreaContainer() {
    const dispatch = useDispatch();

    const onStop = useCallback(() => dispatch(onStopAsyncCreator()), [dispatch]);
    const onPause = useCallback(() => dispatch(changeClockStateCreator(clockStates.PAUSE)), [dispatch]);
    const onStart = useCallback(() => dispatch(changeClockStateCreator(clockStates.WORK)), [dispatch]);

    return (
        <ClockArea
            onStop={onStop}
            onPause={onPause}
            onStart={onStart}
        />
    );
}

export default ClockAreaContainer;