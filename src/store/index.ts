import { configureStore, createSlice } from '@reduxjs/toolkit';
import { PLACEHOLDER_IMAGE, PRODUCTS } from '../constants.ts';
import { IProduct, IProductState } from '../models.ts';

const defaultStoredState: Partial<IProductState> = {
  products: PRODUCTS,
  selectedProduct: undefined,
  nextCreatedId: 21,
};

const getStoredState = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      localStorage.setItem(key, JSON.stringify(defaultStoredState));
      return defaultStoredState;
    }
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(defaultStoredState));
    return defaultStoredState;
  }
};

const setStoredState = (key: string, value: Partial<IProductState>) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getInitialState = (): IProductState => {
  const { products, nextCreatedId } = getStoredState('products');
  return {
    products,
    nextCreatedId,
    selectedProduct: undefined,
    displayedProducts: products,
  } as IProductState;
};

const productSlice = createSlice({
  name: 'products',
  initialState: getInitialState(),
  reducers: {
    select(state, action) {
      if (action.payload === undefined) {
        state.selectedProduct = undefined;
      } else {
        state.selectedProduct = state.products.find(
          (product) => product.id === action.payload
        );
      }
      setStoredState('products', {
        products: state.products,
        nextCreatedId: state.nextCreatedId,
      });
    },
    delete(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      if (state.selectedProduct?.id === action.payload) {
        state.selectedProduct = undefined;
      }
      setStoredState('products', {
        products: state.products,
        nextCreatedId: state.nextCreatedId,
      });
    },
    edit(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex] = Object.assign(
        state.products[productIndex],
        action.payload
      );
      state.selectedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      setStoredState('products', {
        products: state.products,
        nextCreatedId: state.nextCreatedId,
      });
    },
    add(state, action) {
      const ProductToAdd = {
        ...action.payload,
        id: state.nextCreatedId,
        image: PLACEHOLDER_IMAGE,
        creationDate: Date.now(),
      } as IProduct;
      state.products = [...state.products, ProductToAdd];
      state.nextCreatedId++;
      setStoredState('products', {
        products: state.products,
        nextCreatedId: state.nextCreatedId,
      });
    },
    sortBy(state, action) {
      if (action.payload === 'name') {
        state.displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === 'date') {
        state.displayedProducts.sort((a, b) => a.creationDate - b.creationDate);
      }
    },
    search(state, action) {
      state.displayedProducts = state.products.filter(
        product => product.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
        || product.description?.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
      );
    }
  },
});

const store = configureStore({
  reducer: productSlice.reducer,
});

export const productActions = productSlice.actions;

export default store;
