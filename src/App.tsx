import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import ProductDetails from './components/product-details/ProductDetails.tsx';
import ProductList from './components/product-list/ProductList.tsx';
import { IProductState } from './models.ts';
import { productActions } from './store/index.ts';

function App() {
  const selectedProduct = useSelector((state: IProductState) => state.selectedProduct);
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    dispatch(productActions.select(undefined));
    
  }

  return (
    <div className="store">
      <header className="store-header">
        <div className="store-header-title">My Store</div>
      </header>
      <div className="store-products">
        <div className="store-products-list">
          <div className="store-products-list-actions">
            <button onClick={handleOnAdd}>+ Add</button>
          </div>
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
