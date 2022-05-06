import React, { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { globalReducer, filterReducer } from "./reducers";
import { productList } from "./data";
// faker.seed(99);

export const globalContext = createContext({});

export interface product {
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
  products: product[];
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

// interface produqtsState {
//   products: product[],
//   setProducts:
// }

export const GlobalContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState(productList);

  // const fetchProducts = () => {
  //   const products = [...Array(20)].map(
  //     (): product => ({
  //       id: faker.datatype.uuid(),
  //       name: faker.commerce.productName(),
  //       price: faker.commerce.price(),
  //       images: [...Array(5)].map(() => faker.image.food(500, 500, true)),
  //       inStock: faker.datatype.number({ min: 0, max: 20 }),
  //       fastDelivery: faker.datatype.boolean(),
  //       ratings: faker.datatype.number({ min: 1, max: 5 }),
  //       description: faker.commerce.productDescription(),
  //       quantity: null,
  //     })
  //   );
  //   setProducts(products);
  // };

  // useEffect(fetchProducts, []);

  // console.log(productse);

  const globalInitialState: storeInitialState = {
    products: products,
    cart: [],
    subtotal: 0,
  };

  const filterInitialState: filterState = {
    search_query: "",
    min_price: 1,
    max_price: Math.max(...products.map((p) => Number(p.price))) + 1,
    by_order: null, //null | "highToLow" | "lowToHigh"
    include_out_of_stock: true,
    include_fast_delivery_only: false,
    by_ratings: 3,
  };

  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    globalInitialState
  );

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  // console.log(filterState);

  return (
    <globalContext.Provider
      value={{ globalState, globalDispatch, filterState, filterDispatch }}
    >
      {children}
    </globalContext.Provider>
  );
};
