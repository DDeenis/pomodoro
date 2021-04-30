import React, { useEffect } from 'react';
import { number, func, string } from "prop-types";
import { clockStates } from '../../../redux/actionCreators';
import { ProgressBarEmpty, ProgressBarFilled, ProgressBarWrapper } from './styled';

function ProgressBar({ width, state, changeWidth, currentTime, totalTime }) {
    currentTime = currentTime % 2 === 0 ? currentTime : currentTime + 1;

    // useTimeout
    useEffect(() => {
        const id = setTimeout(() => changeWidth(Math.round((currentTime + 1) / totalTime * 100)), 1000);

        return () => clearTimeout(id);
    }, [currentTime]);

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