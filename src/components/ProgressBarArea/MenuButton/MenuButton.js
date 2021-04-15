import React from 'react';
import { string } from "prop-types";
import './MenuButton.css';

function MenuButton({ background }) {
    const buttonStyle = {
        background: background
    };

    return (
        <div className='menu-button' style={buttonStyle}></div>
    );
}

MenuButton.propTypes = {
    background: string
};

export default MenuButton;