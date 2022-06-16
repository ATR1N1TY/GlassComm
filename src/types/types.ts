//type for context API and provider
export interface GlobalContext {
  globalState: GlobalState;
  globalDispatch: React.Dispatch<GlobalAction>;
  filterState: FilterState;
  filterDispatch: React.Dispatch<FilterAction>;
  currencyData: CurrencyData;
  setCurrencyData: React.Dispatch<React.SetStateAction<CurrencyData>>;
  rates: ExchangesRates;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  filterOn: boolean;
  setFilterOn: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  switchMenuVisibility: () => void;
}
export interface GlobalContextProviderProps {
  children: React.ReactNode;
}

//product object interface
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

// interfaces for globalState/store useReducer hook
export interface GlobalState {
  products: IProduct[];
  cart: IProduct[];
  subtotal: number;
}
export type GlobalAction =
  | { type: "add_product"; payload: IProduct }
  | { type: "remove_product"; payload: IProduct }
  | { type: "change_qty"; payload: { id: string; quantity: number } };

//interfaces & types for filter useReducer
export interface FilterState {
  search_query: string;
  min_price: string;
  max_price: string;
  by_order: string | null;
  include_out_of_stock: boolean;
  include_fast_delivery_only: boolean;
  by_ratings: number;
}
export type FilterAction =
  | { type: "search_by_query"; payload: string }
  | { type: "sort_by_price"; payload: string | null }
  | { type: "remove_prices_below"; payload: string }
  | { type: "remove_prices_upper"; payload: string }
  | { type: "sort_by_ratings"; payload: number }
  | { type: "include_out_of_stock"; payload: boolean }
  | { type: "show_fast_delivery_only"; payload: boolean }
  | { type: "clear_filter" };

//interfaces for useExchangeRate custom hook
export interface ExchangesRates {
  [key: string]: number;
}
export interface CurrencyData {
  to: string;
  from: string;
}
