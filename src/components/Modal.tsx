import React from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modal-title" aria-modal="true">
      <div className="modal-content">
        <p id="modal-title">{message}</p>
        <button onClick={onClose} aria-label="Close modal">OK</button>
      </div>
    </div>
  );
};

export default Modal;
