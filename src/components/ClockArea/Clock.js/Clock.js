import React from 'react';
import { string, func, number } from "prop-types";
import { ClockTime, ClockTimeWrapper, ClockWrapper } from './styled';

function Clock({ clockState, timeLeft }) {
    return (
        <ClockWrapper clockState={clockState}>
            <ClockTimeWrapper>
                <ClockTime clockState={clockState}>{timeLeft}</ClockTime>
            </ClockTimeWrapper>
        </ClockWrapper>
    );
}

Clock.propTypes = {
    timeLeft: string,
    clockState: string,
    currentTime: number,
    updateTime: func
}

export default Clock;