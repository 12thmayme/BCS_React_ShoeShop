import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import data from './data/data.json';

const App = () => {
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Shoes Store</h1>
      <ProductList productsData={data} setStateModal={setStateModal} />
      {productDetail && <Modal content={productDetail} onClose={() => setProductDetail(null)} />}
    </div>
  );
};

export default App;
