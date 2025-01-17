import React from 'react';
import { useSelector } from 'react-redux';
import { IProductState } from '../../models';
import ProductListItem from '../product-list-item/ProductListItem.tsx';
import './ProductList.scss';

const ProductList = () => {
  const products = useSelector((state: IProductState) => state.products);

  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <ProductListItem
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
