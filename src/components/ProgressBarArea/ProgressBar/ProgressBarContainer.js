import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressBarCreator, clockStates } from '../../../redux/actionCreators';
import { clockTimers } from '../../../redux/clockReducer';
import useTimeout from '../../hooks/useTimeout';
import ProgressBar from './ProgressBar';

function ProgressBarContainer() {
    const { progressWidth } = useSelector(state => state.progressBar);
    const { currentTime, clockState } = useSelector(state => state.clock);
    const dispatch = useDispatch();

    const changeWidth = useCallback((width) => dispatch(changeProgressBarCreator(width)));

    const currentTimeFixed = currentTime % 2 === 0 ? currentTime : currentTime + 1;
    const totalTime = clockState === clockStates.WORK ? clockTimers.workTimeSeconds : clockTimers.restTimeSeconds;

    useTimeout(() => changeWidth(Math.round((currentTimeFixed + 1) / totalTime * 100)), 1000, [currentTimeFixed]);

    const progressBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';

    return (
        <ProgressBar
            width={progressWidth} 
            progressBackground={progressBackground}
        />
    );
}

export default ProgressBarContainer;