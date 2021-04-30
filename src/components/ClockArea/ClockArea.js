import React from 'react';
import ClockContainer from './Clock.js/ClockContainer';
import { func } from "prop-types";
import { ClockControlsWrapper, ClockAreaWrapper, ClockControl } from './styled';

function ClockArea({ onPause, onStop, onStart }) {
    return (
        <ClockAreaWrapper>
            <ClockContainer />
            <ClockControlsWrapper>
                <ClockControl controlState={'stop'} onClick={() => onStop()}></ClockControl>
                <ClockControl controlState={'pause'} onClick={() => onPause()}></ClockControl>
                <ClockControl controlState={'start'} onClick={() => onStart()}></ClockControl>
            </ClockControlsWrapper>
        </ClockAreaWrapper>
    );
}

ClockArea.propTypes = {
    onPause: func,
    onStop: func,
    onStart: func
}

export default ClockArea;