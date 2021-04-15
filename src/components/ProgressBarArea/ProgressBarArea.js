import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressBarCreator, clockStates } from '../../redux/actionCreators';
import { clockTimers } from '../../redux/clockReducer';
import ButtonsMenu from './ButtonsMenu/ButtonsMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import './ProgressBarArea.css';

function ProgressBarArea() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    // progress bar props
    const clockState = state.clock.clockState;
    const changeWidth = useCallback((width) => dispatch(changeProgressBarCreator(width)));

    return (
        <section className='progress-bar-section'>
            <ButtonsMenu />
            <ProgressBar 
                width={state.progressBar.progressWidth} 
                changeWidth={changeWidth} 
                state={clockState} 
                currentTime={state.clock.currentTime}
                totalTime={clockState === clockStates.WORK ? clockTimers.workTimeSeconds : clockTimers.restTimeSeconds}
            />
        </section>
    );
}

export default ProgressBarArea;