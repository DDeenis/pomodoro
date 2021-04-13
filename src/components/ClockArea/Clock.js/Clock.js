import React from 'react';
import './Clock.css';
import { string, func } from "prop-types";
import { clockStates } from '../../../redux/actionCreators';

// eslint-disable-next-line no-unused-vars
function Clock({ timeLeft, clockState, updateTime, changeClockState }) {
    console.log(clockState);
    if(clockState != clockStates.PAUSE && clockState != clockStates.STOP) {
        setTimeout(() => updateTime(new Date()), 1000);
    }

    return (
        <div className={`clock-wrapper clock-theme-${clockState}`}>
            <div className='clock-time-block'>
                <span className="clock-time">{ timeLeft }</span>
            </div>
        </div>
    );
}

Clock.propTypes = {
    timeLeft: string,
    clockState: string,
    updateTime: func,
    changeClockState: func
}

export default Clock;