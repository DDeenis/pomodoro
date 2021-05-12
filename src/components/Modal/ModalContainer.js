import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

function ModalContainer({ openState = false }) {
    return ReactDOM.createPortal(<Modal openState={openState} />, document.getElementById('root'));
}

export default ModalContainer;