import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTimeCreator } from "../../../redux/actionCreators";
import Clock from "./Clock";

function ClockContainer() {
    const { clockState, timeLeftFormatted, currentTime } = useSelector(state => state.clock)
    const dispatch = useDispatch();

    const updateTime = (newTime) => dispatch(updateTimeCreator(newTime));

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