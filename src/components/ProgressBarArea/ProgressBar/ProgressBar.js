import React, { useEffect } from 'react';
import { number, func, string } from "prop-types";
import './ProgressBar.css';
import { clockStates } from '../../../redux/actionCreators';

function ProgressBar({ width, state, changeWidth, currentTime, totalTime }) {
    currentTime = currentTime % 2 === 0 ? currentTime : currentTime + 1;

    console.log(currentTime + 1, totalTime);
    console.log((currentTime + 1) / totalTime * 100);
    useEffect(() => {
        const id = setTimeout(() => changeWidth(Math.round((currentTime + 1) / totalTime * 100)), 1000);

        return () => clearTimeout(id);
    });

    const progressStyle = {
        width: width + '%',
        background: state === clockStates.WORK ? '#ABDF81' : '#536162'
    }

    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar-filled" style={progressStyle}></div>
            <div className="progress-bar-empty"></div>
        </div>
    );
}

ProgressBar.propTypes = {
    width: number,
    changeWidth: func,
    currentTime: number,
    totalTime: number,
    state: string
}

export default ProgressBar;