import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTimeout from '../../../hooks/useTimeout';
import ProgressBar from './ProgressBar';
import { clockStateSelector, currentTimeSelector, restTimeSelector, workTimeSelector } from '../../../redux/selectors';
import { clockStates } from '../../../redux/clockStates';
import { changeProgressBarCreator } from '../../../redux/progressBarReducer';

function ProgressBarContainer() {
    const clockState= useSelector(clockStateSelector);
    const currentTime = useSelector(currentTimeSelector);
    const workTimeSeconds = useSelector(workTimeSelector);
    const restTimeSeconds = useSelector(restTimeSelector);
    const dispatch = useDispatch();

    const changeWidth = useCallback((width) => dispatch(changeProgressBarCreator(width)), [dispatch]);

    const [progressWidthCalcutated, setProgressWidth] = useState(0);

    useEffect(() => {
        const currentTimeFixed = currentTime % 2 === 0 ? currentTime : currentTime + 1;
        const totalTime = clockState === clockStates.WORK ? workTimeSeconds : restTimeSeconds;

        const newWidth = Math.round((currentTimeFixed + 1) / totalTime * 100);

        setProgressWidth(newWidth)
    }, [currentTime, workTimeSeconds, restTimeSeconds]);

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