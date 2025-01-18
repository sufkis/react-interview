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

  const handleOnSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(productActions.sortBy(event.currentTarget.value));
  }

  return (
    <div className="store">
      <header className="store-header">
        <div className="store-header-title">My Store</div>
      </header>
      <div className="store-products">
        <div className="store-products-list">
          <div className="store-products-list-actions">
            <button className="button success" onClick={handleOnAdd}>+ Add</button>
            <div className="form-control sort">
            <label htmlFor="sortBy">Sort by</label>
              <select name="sortBy" id="sortBy" onChange={(event) => handleOnSelectSort(event)}>
                <option value="date">Date</option>
                <option value="name">Name</option>
              </select>
            </div>
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
