import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clockStates, updateTimeCreator } from "../../../redux/actionCreators";
import useTimeout from '../../hooks/useTimeout';
import Clock from "./Clock";

function ClockContainer() {
    const { clockState, timeLeftFormatted, currentTime } = useSelector(state => state.clock)
    const dispatch = useDispatch();

    const updateTime = useCallback((newTime) => dispatch(updateTimeCreator(newTime)));

    if (clockState !== clockStates.PAUSE && clockState !== clockStates.STOP) {
        useTimeout(() => updateTime(currentTime + 1), 1000, [clockState, currentTime]);
    } else {
        useTimeout(() => {}, 1000, [clockState, currentTime]);
    }

    return (
        <Clock
            clockState={clockState}
            timeLeft={timeLeftFormatted}
            currentTime={currentTime}
            updateTime={updateTime}
        />
    );
}

export default ClockContainer;