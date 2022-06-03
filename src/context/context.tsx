import React, { useEffect, useState, createContext, useReducer } from "react";
import { globalReducer, filterReducer } from "./reducers";
import { productList } from "./data";
import { filterInitialState } from "./initialStates";
import { storeInitialState, Product } from "../types/types";
import useDarkTheme from "../hooks/useDarkTheme";
import useExchangeRates from "../hooks/useExchangeRates";
// import { faker } from "@faker-js/faker";

interface GlobalContext {}

const initialState: GlobalContext = {};

export const globalContext = createContext<any>(initialState);

export const GlobalContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState(productList);
  const [showMenu, setShowMenu] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [currencyData, setCurrencyData, rates] = useExchangeRates();
  const [darkTheme, setDarkTheme] = useDarkTheme();

  const globalInitialState: storeInitialState = {
    products: products,
    cart: [],
    subtotal: 0,
  };

  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    globalInitialState
  );

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  useEffect(() => {
    if (!Object.keys(rates).length) return;

    setProducts(
      globalState.products.filter(
        (product: Product) =>
          (product.price = Math.round(
            (Number(product.price) / rates[currencyData.from]) *
              rates[currencyData.to]
          ).toString())
      )
    );

    globalState.cart.filter(
      (product: Product) =>
        (product.price = Math.round(
          (Number(product.price) / rates[currencyData.from]) *
            rates[currencyData.to]
        ).toString())
    );
  }, [rates, currencyData]);

  return (
    <globalContext.Provider
      value={{
        globalState,
        globalDispatch,
        filterState,
        filterDispatch,
        currencyData,
        setCurrencyData,
        rates,
        darkTheme,
        setDarkTheme,
        filterOn,
        setFilterOn,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
