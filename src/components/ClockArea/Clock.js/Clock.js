import React from 'react';
import './Clock.css';
import { string, func, number } from "prop-types";
import { clockStates } from '../../../redux/actionCreators';

// eslint-disable-next-line no-unused-vars
function Clock(props) {
    if(props.clockState != clockStates.PAUSE && props.clockState != clockStates.STOP) {
        setTimeout(() => props.updateTime(props.currentTime + 1), 1000);
    }

    return (
        <div className={`clock-wrapper clock-theme-${props.clockState}`}>
            <div className='clock-time-block'>
                <span className="clock-time">{ props.timeLeft }</span>
            </div>
        </div>
    );
}

Clock.propTypes = {
    timeLeft: string,
    clockState: string,
    currentTime: number,
    updateTime: func
}

export default Clock;