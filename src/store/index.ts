import { configureStore, createSlice } from "@reduxjs/toolkit";
import { PLACEHOLDER_IMAGE, PRODUCTS } from "../constants.ts";
import { IProduct, IProductState } from "../models.ts";

const defaultState: IProductState = {
  products: PRODUCTS,
  selectedProduct: undefined,
  nextCreatedId: 21,
}

const getStoredState = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      localStorage.setItem(key, JSON.stringify(defaultState));
      return defaultState;
    }
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(defaultState));
    return defaultState;
  }
}

const setStoredState = (key: string, value: IProductState) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const productSlice = createSlice({
  name: 'products',
  initialState: getStoredState('products'),
  reducers: {
    select(state, action) {
      if (action.payload === undefined) {
        state.selectedProduct = undefined;
      } else {
        state.selectedProduct = state.products.find(product => product.id === action.payload);
      }
      setStoredState('products', state);
    },
    delete(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
      if (state.selectedProduct?.id === action.payload) {
        state.selectedProduct  = undefined;
      }
      setStoredState('products', state);
    },
    edit(state, action) {
      const productIndex = state.products.findIndex(product => product.id === action.payload.id);
      state.products[productIndex] = Object.assign(state.products[productIndex], action.payload);
      state.selectedProduct = state.products.find(product => product.id === action.payload.id);
      setStoredState('products', state);
    },
    add(state, action) {
      const ProductToAdd = {
        ...action.payload,
        id: state.nextCreatedId,
        image: PLACEHOLDER_IMAGE,
        creationDate: Date.now()
      } as IProduct;
      state.products = [...state.products, ProductToAdd];
      state.nextCreatedId++;
      setStoredState('products', state);
    },
    sortBy(state, action) {
      if (action.payload === 'name') {
        state.products.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === 'date') {
        state.products.sort((a, b) => a.creationDate - b.creationDate);
      }
    }
  }
});

const store = configureStore({
  reducer: productSlice.reducer
})

export const productActions = productSlice.actions;

export default store;
