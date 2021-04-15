import React from 'react';
import { useSelector } from 'react-redux';
import { clockStates } from '../../../redux/actionCreators';
import MenuButton from '../MenuButton/MenuButton';
import './ButtonsMenu.css';

function ButtonsMenu() {
    const clockState = useSelector(state => state.clock.clockState);
    const middleBtnBackground = clockState === clockStates.WORK ? '#ABDF81' : '#536162';

    return (
        <div className='buttons-menu'>
            <MenuButton background='#314E52' />
            <MenuButton background={middleBtnBackground} />
            <MenuButton background='#F2A154' />
        </div>
    );
}

export default ButtonsMenu;