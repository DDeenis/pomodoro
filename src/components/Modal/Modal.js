import React from 'react';
import { ModalDarkBackground, ModalWrapper } from './styled';
import { bool, func, element } from "prop-types";

function Modal({ openState, setOpenState, children }) {
    return (
        <ModalDarkBackground onClick={() => setOpenState(false)} active={openState}>
            <ModalWrapper onClick={(e) => e.stopPropagation()} active={openState}>
                { children }
            </ModalWrapper>
        </ModalDarkBackground>
    );
}

Modal.propTypes = {
    openState: bool,
    setOpenState: func,
    children: element
}

export default Modal;