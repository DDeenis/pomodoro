import React from 'react';
import ClockContainer from './Clock.js/ClockContainer';
import { func, string } from "prop-types";
import './ClockArea.css';

function ClockArea({ onPause, onStop, onStart }) {
    return (
        <section className="clock-area">
            <ClockContainer />
            <div className="clock-controls-wrapper">
                <div className="clock-control clock-control-stop" onClick={() => onStop()}></div>
                <div className="clock-control clock-control-pause" onClick={() => onPause()}></div>
                <div className="clock-control clock-control-start" onClick={() => onStart()}></div>
            </div>
        </section>
    );
}

ClockArea.propTypes = {
    currentState: string,
    onPause: func,
    onStop: func,
    onStart: func
}

export default ClockArea;