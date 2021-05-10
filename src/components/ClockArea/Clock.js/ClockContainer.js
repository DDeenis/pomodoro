import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clockStates, updateTimeCreator } from "../../../redux/actionCreators";
import { clockStateSelector, currentTimeSelector } from '../../../redux/selectors';
import useTimeout from '../../hooks/useTimeout';
import Clock from "./Clock";

function ClockContainer() {
    const { timeLeftFormatted } = useSelector(state => state.clock)
    const currentTime = useSelector(currentTimeSelector)
    const clockState = useSelector(clockStateSelector);
    const dispatch = useDispatch();

    const updateTime = useCallback((newTime) => dispatch(updateTimeCreator(newTime)), [dispatch]);

    let timeoutFunc = () => {};

    if (clockState !== clockStates.PAUSE && clockState !== clockStates.STOP) {
        timeoutFunc = () => updateTime(currentTime + 1);
    }

    useTimeout(timeoutFunc, 1000, [clockState, currentTime]);

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