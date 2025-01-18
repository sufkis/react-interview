import React from 'react';
import './ProductListItem.scss';
import { IProduct } from '../../models';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/index.ts';

const ProductListItem: React.FC<Partial<IProduct>> = ({ id, name, description = '', price, image }) => {
  const dispatch = useDispatch();

  const selectProductHandler = () => {
    dispatch(productActions.select(id))
  }

  return (
    <div className="product" onClick={selectProductHandler}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-name">{name}</div>
      <div className="product-description">{description}</div>
      <div className="product-actions">
        <button className="button delete">Delete</button>
      </div>
    </div>
  )
}

export default ProductListItem;