import React from 'react';
import { ModalDarkBackground, ModalWrapper } from './styled';
import useModal from '../../hooks/useModal';

function Modal() {
    const [isOpen, setIsOpen] = useModal();
    console.log(isOpen, setIsOpen)

    return (
        <>
            <ModalDarkBackground onClick={() => console.log('a')} />
            <ModalWrapper onClick={() => {}}>
                apipa
            </ModalWrapper>
        </>
    );
}

export default Modal;