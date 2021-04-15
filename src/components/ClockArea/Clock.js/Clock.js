import React, { useEffect } from 'react';
import './Clock.css';
import { string, func, number } from "prop-types";
import { clockStates } from '../../../redux/actionCreators';

function Clock(props) {
    useEffect(() => {
        let id = 0;

        if(props.clockState != clockStates.PAUSE && props.clockState != clockStates.STOP) {
            const updateTime = () => props.updateTime(props.currentTime + 1);
            id = setTimeout(updateTime, 1000);
        }

        return () => clearTimeout(id);
    });

    return (
        <div className={`clock-wrapper clock-theme-${props.clockState}`}>
            <div className='clock-time-block'>
                <span className="clock-time">{props.timeLeft}</span>
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