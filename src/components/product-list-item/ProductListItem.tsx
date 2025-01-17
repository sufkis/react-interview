import React from 'react';
import './ProductListItem.scss';
import { IProduct } from '../../models';

const ProductListItem: React.FC<Partial<IProduct>> = ({ id, name, description = '', price, image }) => {
  return (
    <div className="product">
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