import React from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../models';
import { productActions } from '../../store/index.ts';
import './ProductListItem.scss';

const ProductListItem: React.FC<Partial<IProduct>> = ({
  id,
  name,
  description = '',
  image,
}) => {
  const dispatch = useDispatch();

  const selectProductHandler = () => {
    dispatch(productActions.select(id));
  };

  const deleteProductHandler = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.stopPropagation()
    dispatch(productActions.delete(id));
  };

  return (
    <div
      className="product"
      onClick={selectProductHandler}
    >
      <img
        src={image}
        alt={name}
        className="product-image"
      />
      <div className="product-name">{name}</div>
      <div className="product-description">{description}</div>
      <div className="product-actions">
        <button
          className="button delete"
          onClick={(event) => deleteProductHandler(event)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
