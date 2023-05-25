import React from 'react';
import './modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Cerrar</button> {/* añade un botón para cerrar el modal */}
      </div>
    </div>
  );
}

export default Modal;
