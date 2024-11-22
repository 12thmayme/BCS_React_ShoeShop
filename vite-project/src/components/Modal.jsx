import React from 'react';

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose} 
            ></button>
          </div>
          <div className="modal-body">
            <img 
              src={content.image} 
              alt={content.name} 
              className="img-fluid" 
            />
            <p className="mt-3">{content.description}</p>
            <p><strong>Price:</strong> ${content.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
