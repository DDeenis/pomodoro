import React from 'react';
import { number, func, string } from "prop-types";
import { clockStates } from '../../../redux/actionCreators';
import { ProgressBarEmpty, ProgressBarFilled, ProgressBarWrapper } from './styled';
import useTimeout from '../../hooks/useTimeout';

function ProgressBar({ width, state, changeWidth, currentTime, totalTime }) {
    currentTime = currentTime % 2 === 0 ? currentTime : currentTime + 1;

    useTimeout(() => changeWidth(Math.round((currentTime + 1) / totalTime * 100)), 1000, [currentTime]);

    const progressBackground = state === clockStates.WORK ? '#ABDF81' : '#536162';

    return (
        <ProgressBarWrapper>
            <ProgressBarFilled progressBackground={progressBackground} progressWidth={width} />
            <ProgressBarEmpty />
        </ProgressBarWrapper>
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