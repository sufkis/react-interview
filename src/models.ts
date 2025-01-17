export interface IProduct {
  id: number;
  name: string,
  description?: string,
  price: number,
  image?: string;
  creationDate: Date
}

export interface IProductState {
  products: IProduct[];
  selectedProductId: number,
}