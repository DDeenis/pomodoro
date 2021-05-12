import React from 'react';
import { ModalDarkBackground, ModalWrapper } from './styled';
import { bool } from "prop-types";
import useModal from '../../hooks/useModal';

function Modal({ openState }) {
    const [isOpen, setIsOpen] = useModal(openState);

    return (
        <>
            <ModalDarkBackground onClick={() => setIsOpen(false)} isVisible={isOpen} />
            <ModalWrapper isVisible={isOpen}>
                text
            </ModalWrapper>
        </>
    );
}

Modal.propTypes = {
    openState: bool
}

export default Modal;