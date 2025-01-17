import React from 'react';
import './ProductListItem.scss';
import { IProduct } from '../../models';

const ProductListItem: React.FC<Partial<IProduct>> = ({ id, name, description = '', price, image }) => {
  return (
    <div>{name}</div>
  )
}

export default ProductListItem;