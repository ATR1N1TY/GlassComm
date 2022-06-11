import { CART_ACTIONS, FILTER_ACTIONS } from "./actions";
import { Product } from "../types/types";
// interface action {
//   type: string;
//   payload: string | number;
// }

//   const globalInitialState: storeInitialState = {
//     products: products,
//     cart: [],
//   };

export const globalReducer = (state: any, action: any) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };

    case CART_ACTIONS.REMOVE_PRODUCT:
      console.log("PRODUCT REMOVED");

      return {
        ...state,
        cart: state.cart.filter(
          (product: Product) => product.id !== action.payload.id
        ),
      };

    case CART_ACTIONS.CHANGE_QTY:
      console.log("QTY CHANGED");
      return {
        ...state,
        cart: state.cart.filter((prod: Product) =>
          action.payload.id === prod.id
            ? (prod.quantity = action.payload.quantity)
            : prod.quantity
        ),
      };

    default:
      state;
  }
};

export const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case FILTER_ACTIONS.SEARCH_BY_QUERY:
      return { ...state, search_query: action.payload };

    case FILTER_ACTIONS.REMOVE_PRICES_BELOW:
      return {
        ...state,
        min_price: action.payload ? action.payload : 0,
      };

    case FILTER_ACTIONS.REMOVE_PRICES_UPPER:
      return {
        ...state,
        max_price: action.payload ? action.payload : 999999999999,
      };

    case FILTER_ACTIONS.SORT_BY_PRICE:
      return { ...state, by_order: action.payload };

    case FILTER_ACTIONS.INCLUDE_OUT_OF_STOCK:
      return { ...state, include_out_of_stock: action.payload };

    case FILTER_ACTIONS.SHOW_FAST_DELIVERY_ONLY:
      return { ...state, include_fast_delivery_only: action.payload };

    case FILTER_ACTIONS.SORT_BY_RATINGS:
      return { ...state, by_ratings: action.payload };

    case FILTER_ACTIONS.CLEAR_FILTER:
      return {
        search_query: "",
        min_price: 1,
        max_price: 999999999,
        by_order: null, //null | "highToLow" | "lowToHigh"
        include_out_of_stock: true,
        include_fast_delivery_only: false,
        by_ratings: 3,
      };

    default:
      return state;
  }
};
