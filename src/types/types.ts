export interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
  description: string;
  quantity: number | null;
}

export interface storeInitialState {
  products: Product[];
  cart: [];
  subtotal: number;
}

export interface filterState {
  search_query: string;
  min_price: number;
  max_price: number;
  by_order: string | null;
  include_out_of_stock: boolean;
  include_fast_delivery_only: boolean;
  by_ratings: null | number;
}
