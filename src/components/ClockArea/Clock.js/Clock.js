import React, { useEffect } from 'react';
import { string, func, number } from "prop-types";
import { clockStates } from '../../../redux/actionCreators';
import { ClockTime, ClockTimeWrapper, ClockWrapper } from './styled';

function Clock(props) {
    useEffect(() => {
        let id = 0;

        if (props.clockState != clockStates.PAUSE && props.clockState != clockStates.STOP) {
            const updateTime = () => props.updateTime(props.currentTime + 1);
            id = setTimeout(updateTime, 1000);
        }

        return () => clearTimeout(id);
    });

    return (
        <ClockWrapper clockState={props.clockState}>
            <ClockTimeWrapper>
                <ClockTime clockState={props.clockState}>{props.timeLeft}</ClockTime>
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