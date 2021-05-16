import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

function ModalContainer({ openState, setOpenState, children }) {
    return ReactDOM.createPortal(
        <Modal openState={openState} setOpenState={setOpenState}>
            { children }
        </Modal>,
        document.getElementById('root')
    );
}

export default ModalContainer;