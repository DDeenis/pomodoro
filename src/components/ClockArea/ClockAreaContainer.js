import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockStateCreator, clockStates } from "../../redux/actionCreators";
import ClockArea from "./ClockArea";

function ClockAreaContainer() {
    const currentState = useSelector(state => state.clock.clockState);
    const dispatch = useDispatch();

    const onStop = () => dispatch(changeClockStateCreator(clockStates.STOP));
    const onPause = () => dispatch(changeClockStateCreator(clockStates.PAUSE));
    const onStart = () => dispatch(changeClockStateCreator(clockStates.WORK));

    return (
        <ClockArea
            currentState={currentState}
            onStop={onStop}
            onPause={onPause}
            onStart={onStart}
        />
    );
}

export default ClockAreaContainer;