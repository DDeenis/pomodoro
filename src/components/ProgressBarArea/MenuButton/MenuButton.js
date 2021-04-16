import React from 'react';
import { string, func } from "prop-types";
import './MenuButton.css';

function MenuButton({ background, text, textColor, onClick }) {
    const buttonStyle = {
        background: background
    };

    const textStyle = {
        color: textColor
    };

    return (
        <div className='menu-button' style={buttonStyle} onClick={() => onClick()}>
            <span className='menu-button-text' style={textStyle}>{text}</span>
        </div>
    );
}

MenuButton.propTypes = {
    background: string,
    text: string,
    textColor: string,
    onClick: func
};

export default MenuButton;