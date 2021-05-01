import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeClockStateCreator, clockStates, onStopAsyncCreator } from "../../redux/actionCreators";
import ClockArea from "./ClockArea";

function ClockAreaContainer() {
    const dispatch = useDispatch();

    const onStop = useCallback(() => dispatch(onStopAsyncCreator()));
    const onPause = useCallback(() => dispatch(changeClockStateCreator(clockStates.PAUSE)));
    const onStart = useCallback(() => dispatch(changeClockStateCreator(clockStates.WORK)));

    return (
        <ClockArea
            onStop={onStop}
            onPause={onPause}
            onStart={onStart}
        />
    );
}

export default ClockAreaContainer;