import React from 'react';

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="card">
      <img 
        src={item.image} 
        alt={item.name} 
        className="card-img-top" 
        style={{ objectFit: 'contain' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <button 
          className="btn btn-primary" 
          onClick={() => setStateModal(item)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
