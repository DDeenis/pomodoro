import React from 'react';
import { number, string } from "prop-types";
import { ProgressBarEmpty, ProgressBarFilled, ProgressBarWrapper } from './styled';

function ProgressBar({ width, progressBackground }) {
    return (
        <ProgressBarWrapper>
            <ProgressBarFilled progressBackground={progressBackground} progressWidth={width} />
            <ProgressBarEmpty />
        </ProgressBarWrapper>
    );
}

ProgressBar.propTypes = {
    width: number,
    progressBackground: string
}

export default ProgressBar;