import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeClockStateCreator } from '../../redux/clockReducer';
import { clockStates } from '../../redux/clockStates';
import { onStopAsyncCreator } from '../../redux/sagas';
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