
import React from 'react';
import './Ex3.css';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
