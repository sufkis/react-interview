import React, { useState } from 'react';
import { IProduct } from '../../models.ts';
import { isNameValid, isDescriptionValid, isPriceValid } from '../../utils.ts';
import './ProductDetails.scss';

const ProductDetails: React.FC<{ selectedProduct: IProduct | undefined }> = ({ selectedProduct }) => {
  const [errors, setErrors] = useState<string[]>([]);

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
      return;
    }

    setErrors([]);
  };

  return (
    <div className="details">
      <div className="details-header">{ `Product id: ${selectedProduct?.id} details` }</div>
      <img
        src={selectedProduct?.image}
        alt=""
        className="details-image"
      />
      <form
        action={saveDetailsAction}
        className="details-form"
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
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductDetails;
