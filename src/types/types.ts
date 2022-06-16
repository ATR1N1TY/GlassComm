export interface IProduct {
  id: string;
  name: string;
  price: string;
  images: string[];
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
  description: string;
  quantity: number;
}

export type globalStateType = {
  products: IProduct[];
  cart: IProduct[];
  subtotal: number;
};

export type GlobalAction =
  | { type: "add_product"; payload: IProduct }
  | { type: "remove_product"; payload: IProduct }
  | { type: "change_qty"; payload: { id: string; quantity: number } };

export type FilterState = {
  search_query: string;
  min_price: string;
  max_price: string;
  by_order: string | null;
  include_out_of_stock: boolean;
  include_fast_delivery_only: boolean;
  by_ratings: number;
};

export type FilterAction =
  | { type: "search_by_query"; payload: string }
  | { type: "sort_by_price"; payload: string | null }
  | { type: "remove_prices_below"; payload: string }
  | { type: "remove_prices_upper"; payload: string }
  | { type: "sort_by_ratings"; payload: number }
  | { type: "include_out_of_stock"; payload: boolean }
  | { type: "show_fast_delivery_only"; payload: boolean }
  | { type: "clear_filter" };

export type ExchangesRates = { [key: string]: number };

export type CurrencyData = {
  to: string;
  from: string;
};
