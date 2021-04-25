import React from 'react';
import { string, func } from "prop-types";
import { MenuButtonText, MenuButtonWrapper } from './styled';

function MenuButton({ background, text, textColor, onClick }) {
    return (
        <MenuButtonWrapper backgroundColor={background} onClick={() => onClick()}>
            <MenuButtonText textColor={textColor}>{ text }</MenuButtonText>
        </MenuButtonWrapper>
    );
}

MenuButton.propTypes = {
    background: string,
    text: string,
    textColor: string,
    onClick: func
};

export default MenuButton;