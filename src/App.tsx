import React from 'react';
import './App.scss';
import ProductList from './components/product-list/ProductList.tsx';

function App() {
  return (
    <div className="store">
      <header className="store-header">
        <div className="store-header-title">My Store</div>
      </header>
      <div className="store-products">
        <div className="store-products-list">
          <ProductList />
        </div>
        <div className="store-products-display"></div>
      </div>
    </div>
  );
}

export default App;
