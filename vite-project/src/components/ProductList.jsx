import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="row">
      {productsData.map((product) => (
        <div className="col-md-4 mt-4" key={product.id}>
          <ProductItem item={product} setStateModal={setStateModal} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
