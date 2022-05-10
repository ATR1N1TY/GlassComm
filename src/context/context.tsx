import React, { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { globalReducer, filterReducer, currencyReducer } from "./reducers";
import { productList } from "./data";

interface GlobalContext {}

const initialState: GlobalContext = {};

// კონტექსტი
export const globalContext = createContext<any>(initialState);

// TS ინტერფეისები
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

export const GlobalContextProvider = ({ children }: any) => {
  //პროდუქტების მასივი
  const [products, setProducts] = useState(productList);

  //fetchCurrency ფუნქციიდან წამოსული კურსი
  const [rate, setRate] = useState(1);

  // ფუნქცია რომელიც იღებს რომელ ვალუტაში გარდაქმნას რომელი ვალუტა
  const fetchCurrency = (to: string, from: string) => {
    console.log("from: " + from, "to: " + to);

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=1`,
      {
        headers: {
          apikey: "z8buYjkFfCEXpkjz9A3ANbMagFWSxLVo",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const { result } = data;
        setRate(result);
      })
      .catch((error) => console.log("error", error));
  };

  // გლობალსთეითის პირველი სახე
  const globalInitialState: storeInitialState = {
    products: products,
    cart: [],
    subtotal: 0,
  };

  //ფილტერსთეითის პირველი სახე
  const filterInitialState: filterState = {
    search_query: "",
    min_price: 1,
    max_price: 99999999999999,
    by_order: null, //null | "highToLow" | "lowToHigh"
    include_out_of_stock: true,
    include_fast_delivery_only: false,
    by_ratings: 3,
  };

  const currencytInitialState = {
    to: "USD",
    from: "USD",
    // rate: 1,
  };

  // გლობალ სთეითის რედიუსერ ჰუკი
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    globalInitialState
  );

  //ფილტრესთეითის რედიუსერ ჰუკი
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  const [currencyState, currencyDispatch] = useReducer(
    currencyReducer,
    currencytInitialState
  );

  //ჰუკი რომელიც მაშინ გაეშვება როდესაც შეიცვლება
  useEffect(() => {
    fetchCurrency(currencyState.to, currencyState.from);
    console.log(rate);

    setProducts(
      globalState.products.filter(
        (product: Product) =>
          (product.price = (Number(product.price) * rate).toString())
      )
    );
  }, [currencyState.to]);

  return (
    <globalContext.Provider
      value={{
        globalState,
        globalDispatch,
        filterState,
        filterDispatch,
        currencyDispatch,
        rate,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
