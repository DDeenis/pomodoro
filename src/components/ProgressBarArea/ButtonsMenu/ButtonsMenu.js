import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockStateCreator, clockStates, updateTimeCreator } from '../../../redux/actionCreators';
import MenuButton from '../MenuButton/MenuButton';
import { ButtonsMenuWrapper } from './styled';

function ButtonsMenu() {
    const clockState = useSelector(state => state.clock.clockState);
    const dispatch = useDispatch();

    const middleBtnBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';
    const middleBtnText = clockState === clockStates.WORK ? 'Work' : 'Rest';

    const onStop = () => {
        dispatch(changeClockStateCreator(clockStates.STOP));
        dispatch(updateTimeCreator(0));
    };
    const onStart = () => dispatch(changeClockStateCreator(clockStates.WORK));

    return (
        <ButtonsMenuWrapper>
            <MenuButton background='#314E52' text="Stop" textColor='#F2A154' onClick={onStop} />
            <MenuButton background={middleBtnBackground} text={middleBtnText} textColor='#F7F6E7' onClick={() => {}} />
            <MenuButton background='#F2A154' text="Start" textColor='#314E52' onClick={onStart} />
        </ButtonsMenuWrapper>
    );
}

export default ButtonsMenu;