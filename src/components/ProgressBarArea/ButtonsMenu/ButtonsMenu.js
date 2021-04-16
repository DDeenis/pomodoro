import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeClockStateCreator, clockStates } from '../../../redux/actionCreators';
import MenuButton from '../MenuButton/MenuButton';
import './ButtonsMenu.css';

function ButtonsMenu() {
    const clockState = useSelector(state => state.clock.clockState);
    const dispatch = useDispatch();

    const middleBtnBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';
    const middleBtnText = clockState === clockStates.WORK ? 'Work' : 'Rest';

    const onStop = () => dispatch(changeClockStateCreator(clockStates.STOP));
    const onStart = () => dispatch(changeClockStateCreator(clockStates.WORK));

    return (
        <div className='buttons-menu'>
            <MenuButton background='#314E52' text="Stop" textColor='#F2A154' onClick={onStop} />
            <MenuButton background={middleBtnBackground} text={middleBtnText} textColor='#F7F6E7' onClick={() => {}} />
            <MenuButton background='#F2A154' text="Start" textColor='#314E52' onClick={onStart} />
        </div>
    );
}

export default ButtonsMenu;