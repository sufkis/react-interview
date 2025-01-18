import { configureStore, createSlice } from "@reduxjs/toolkit";
import { PLACEHOLDER_IMAGE, PRODUCTS } from "../constants.ts";
import { IProduct, IProductState } from "../models.ts";

const initialState: IProductState = {
  products: PRODUCTS,
  selectedProduct: undefined,
  nextCreatedId: 21,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    select(state, action) {
      if (action.payload === undefined) {
        state.selectedProduct = undefined
      } else {
        state.selectedProduct = state.products.find(product => product.id === action.payload);
      }
    },
    delete(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
      if (state.selectedProduct?.id === action.payload) {
        state.selectedProduct  = undefined;
      }
    },
    edit(state, action) {
      const productIndex = state.products.findIndex(product => product.id === action.payload.id);
      state.products[productIndex] = Object.assign(state.products[productIndex], action.payload);
      state.selectedProduct = state.products.find(product => product.id === action.payload.id);
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
    }
  }
});

const store = configureStore({
  reducer: productSlice.reducer
})

export const productActions = productSlice.actions;

export default store;
