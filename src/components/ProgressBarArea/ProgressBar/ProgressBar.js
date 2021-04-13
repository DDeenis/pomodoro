import React from 'react';
import { number, func } from "prop-types";
import './ProgressBar.css';

// eslint-disable-next-line no-unused-vars
function ProgressBar({ width, changeWidth }) {
    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar-filled"></div>
            <div className="progress-bar-empty"></div>
        </div>
    );
}

ProgressBar.propTypes = {
    width: number,
    changeWidth: func
}

export default ProgressBar;