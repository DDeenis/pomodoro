import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressBarCreator, clockStates } from '../../../redux/actionCreators';
import useTimeout from '../../hooks/useTimeout';
import ProgressBar from './ProgressBar';
import {clockTimers} from "../../../redux/clockTimers";

function ProgressBarContainer() {
    const { progressWidth } = useSelector(state => state.progressBar);
    const { currentTime, clockState } = useSelector(state => state.clock);
    const dispatch = useDispatch();

    const changeWidth = useCallback((width) => dispatch(changeProgressBarCreator(width)), [dispatch]);

    const currentTimeFixed = currentTime % 2 === 0 ? currentTime : currentTime + 1;
    const totalTime = clockState === clockStates.WORK ? clockTimers.workTimeSeconds : clockTimers.restTimeSeconds;

    // console.log(currentTimeFixed / totalTime * 100, currentTimeFixed, totalTime * 100)
    const newWidth = Math.round((currentTimeFixed + 1) / totalTime * 100);
    useTimeout(() => changeWidth(newWidth), 1000, [newWidth]);

    const progressBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';

    return (
        <ProgressBar
            width={progressWidth} 
            progressBackground={progressBackground}
        />
    );
}

export default ProgressBarContainer;