import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PLACEHOLDER_IMAGE } from '../../constants.ts';
import { IProduct } from '../../models.ts';
import { productActions } from '../../store/index.ts';
import { isDescriptionValid, isNameValid, isPriceValid } from '../../utils.ts';
import './ProductDetails.scss';

const ProductDetails: React.FC<{ selectedProduct: IProduct | undefined }> = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const saveDetailsAction = (formData: FormData) => {
    const name = formData.get('name');
    const description = formData.get('description');
    const price = formData.get('price');

    let errors: string[] = [];

    if (!isNameValid(name as string)) {
      errors.push('name');
    }
    if (!isDescriptionValid(description as string)) {
      errors.push('description');
    }
    if (!isPriceValid(price as number | null)) {
      errors.push('price');
    }

    if (errors.length > 0) {
      setErrors(errors);
      if (selectedProduct) {
        dispatch(productActions.select(selectedProduct.id));
      }
      return;
    }

    if (selectedProduct) {
      dispatch(productActions.edit({
        id: selectedProduct?.id,
        name,
        description,
        price
      }));
    } else {
      dispatch(productActions.add({
        name, description, price
      }));
    }
    
    setErrors([]);
  };

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    setIsFormValid(event.currentTarget.checkValidity())
  }

  return (
    <div className="details">
      <div className="details-header">{ `Product id: ${selectedProduct?.id} details` }</div>
      <img
        src={selectedProduct?.image ?? PLACEHOLDER_IMAGE}
        alt={selectedProduct?.name ?? 'placeholder'}
        className="details-image"
      />
      <form
        action={saveDetailsAction}
        className="details-form"
        onChange={(event) => handleFormChange(event)}
      >
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            className={errors.includes('name') ? 'error' : ''}
            id="name"
            type="text"
            name="name"
            defaultValue={selectedProduct?.name}
            required
            maxLength={30}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea
            className={errors.includes('description') ? 'error' : ''}
            id="description"
            name="description"
            defaultValue={selectedProduct?.description}
            maxLength={200}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <div className="price-input">
            <input
              className={errors.includes('price') ? 'error' : ''}
              id="price"
              type="number"
              name="price"
              defaultValue={selectedProduct?.price}
              required
              min={0.00}
              step={0.01}
            />
            $
          </div>
        </div>
        <button
          className="form-submit"
          type="submit"
          disabled={!isFormValid}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductDetails;
