import React from 'react';
import './App.scss';
import ProductList from './components/product-list/ProductList.tsx';
import ProductDetails from './components/product-details/ProductDetails.tsx';
import { useSelector } from 'react-redux';
import { IProductState } from './models.ts';

function App() {
  const selectedProduct = useSelector((state: IProductState) => state.selectedProduct);

  return (
    <div className="store">
      <header className="store-header">
        <div className="store-header-title">My Store</div>
      </header>
      <div className="store-products">
        <div className="store-products-list">
          <ProductList />
        </div>
        <div className="store-products-details">
          <ProductDetails selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default App;
