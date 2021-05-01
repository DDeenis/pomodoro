import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { func, string } from "prop-types";
import { ButtonsMenuWrapper } from './styled';

function ButtonsMenu({ onStart, onStop, middleBtnBackground, middleBtnText }) {
    return (
        <ButtonsMenuWrapper>
            <MenuButton background='#314E52' text="Stop" textColor='#F2A154' onClick={onStop} />
            <MenuButton background={middleBtnBackground} text={middleBtnText} textColor='#F7F6E7' onClick={() => {}} />
            <MenuButton background='#F2A154' text="Start" textColor='#314E52' onClick={onStart} />
        </ButtonsMenuWrapper>
    );
}

ButtonsMenu.propTypes = {
    onStart: func,
    onStop: func,
    middleBtnBackground: string,
    middleBtnText: string
}

export default ButtonsMenu;