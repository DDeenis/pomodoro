import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

function ModalContainer() {
    return ReactDOM.createPortal(<Modal />, document.getElementById('root'));
}

export default ModalContainer;