import React from 'react';
import './Modal.css';

const Modal = ({ onClose, rowInfo }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <h2>Подробная информация</h2>
        <div>
          <div>price: {rowInfo?.price}</div>
          <div>bestBidSize: {rowInfo?.bestBidSize}</div>
          <div>bestBidPrice: {rowInfo?.bestBidPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
