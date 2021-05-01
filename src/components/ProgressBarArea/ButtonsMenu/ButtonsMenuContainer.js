import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockStateCreator, clockStates, onStopAsyncCreator } from '../../../redux/actionCreators';
import ButtonsMenu from './ButtonsMenu';

function ButtonsMenuContainer() {
    const clockState = useSelector(state => state.clock.clockState);
    const dispatch = useDispatch();

    const middleBtnBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';
    const middleBtnText = clockState === clockStates.WORK ? 'Work' : 'Rest';

    const onStop = useCallback(() => dispatch(onStopAsyncCreator()));
    const onStart = useCallback(() => dispatch(changeClockStateCreator(clockStates.WORK)));

    return (
        <ButtonsMenu
            onStart={onStart}
            onStop={onStop}
            middleBtnBackground={middleBtnBackground}
            middleBtnText={middleBtnText}
        />
    );
}

export default ButtonsMenuContainer;