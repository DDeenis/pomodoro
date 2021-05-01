import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgressBarCreator, clockStates } from '../../redux/actionCreators';
import { clockTimers } from '../../redux/clockReducer';
import ButtonsMenuContainer from './ButtonsMenu/ButtonsMenuContainer';
import ProgressBar from './ProgressBar/ProgressBar';
import { ProgressBarSection } from './styled';

function ProgressBarArea() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    // progress bar props
    const clockState = state.clock.clockState;
    const changeWidth = useCallback((width) => dispatch(changeProgressBarCreator(width)));

    return (
        <ProgressBarSection>
            <ButtonsMenuContainer />
            <ProgressBar 
                width={state.progressBar.progressWidth} 
                changeWidth={changeWidth} 
                state={clockState} 
                currentTime={state.clock.currentTime}
                totalTime={clockState === clockStates.WORK ? clockTimers.workTimeSeconds : clockTimers.restTimeSeconds}
            />
        </ProgressBarSection>
    );
}

export default ProgressBarArea;