export interface IProduct {
  id: number;
  name: string,
  description?: string,
  price: number,
  image?: string;
  creationDate: number;
}

export interface IProductState {
  products: IProduct[];
  selectedProduct: IProduct | undefined;
  nextCreatedId: number;
  displayedProducts: IProduct[]
}