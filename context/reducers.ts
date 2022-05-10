import cart from "../pages/cart";
import { CART_ACTIONS, FILTER_ACTIONS, CURRENCY_ACTIONS } from "./actions";
import { storeInitialState, product } from "./context";

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
      return {
        ...state,
        cart: state.cart.filter(
          (product: product) => product.id !== action.payload.id
        ),
      };

    case CART_ACTIONS.CHANGE_QTY:
      return {
        ...state,
        cart: state.cart.filter((prod: product) =>
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

//რაც შეეხება rate-ს
// rate შეგვიძლია გავაკეთოთ როგორც useState ჰუკი და მისი setRate() ფუნქცია გამოვიყენოთ ფეჩ ფუნქციაში
// შემდეგ კი დავააფდეითოთ product მასივის ფასები რაიმე მასივ მეთოდის გამოყენებით
// ორი ვარიანტია:
//1. შევცვალოთ product მასივის ფასები context კომპონენტში
//2. ან შევცვალოთ product მასივის ფასები productList კომპონენტში

// თუ productის ფასებს productListში დავააფდეითებთ მაშინ ამ კომპონენტს უნდა გადავცეთ დამატებით rate ცვლადი
// და თუ ასე ვიზამთ ნებისმიერი პროდუქტი რომელიც კარტში დაემატება ექნება განახლებული ფასი
// მაგრამ როდესაც მე შევცვლი ვალუტას, ქარტში წინა ვალუტის ფასები იქნება, ასე რომ ქარტშიც უნდა შევცვალო

export const currencyReducer = (state: any, action: any) => {
  switch (action.type) {
    case CURRENCY_ACTIONS.CHANGE_CURRENCY:
      return { to: action.payload, from: state.to };

    default:
      return state;
  }
};
