import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressBarCreator, clockStates } from '../../../redux/actionCreators';
import useTimeout from '../../hooks/useTimeout';
import ProgressBar from './ProgressBar';
import {clockTimers} from "../../../redux/clockTimers";
import { clockStateSelector, currentTimeSelector } from '../../../redux/selectors';

function ProgressBarContainer() {
    const clockState= useSelector(clockStateSelector);
    const currentTime = useSelector(currentTimeSelector);
    const dispatch = useDispatch();

    const changeWidth = useCallback((width) => dispatch(changeProgressBarCreator(width)), [dispatch]);

    const [progressWidthCalcutated, setProgressWidth] = useState(0);

    useEffect(() => {
        const currentTimeFixed = currentTime % 2 === 0 ? currentTime : currentTime + 1;
        const totalTime = clockState === clockStates.WORK ? clockTimers.workTimeSeconds : clockTimers.restTimeSeconds;

        const newWidth = Math.round((currentTimeFixed + 1) / totalTime * 100);

        setProgressWidth(newWidth)
    }, [currentTime]);

    useTimeout(() => changeWidth(progressWidthCalcutated), 1000, [progressWidthCalcutated]);

    const progressBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';

    return (
        <ProgressBar
            width={progressWidthCalcutated} 
            progressBackground={progressBackground}
        />
    );
}

export default ProgressBarContainer;