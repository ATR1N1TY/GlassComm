import React, { useEffect, useState, createContext, useReducer } from "react";
import { globalReducer, filterReducer } from "./reducers";
import { productList } from "./data";
import { filterInitialState } from "./initialStates";
import {
  GlobalContext,
  IProduct,
  GlobalState,
  GlobalContextProviderProps,
} from "../types/types";
import useDarkTheme from "../hooks/useDarkTheme";
import useExchangeRates from "../hooks/useExchangeRates";
import useMenu from "../hooks/useMenu";

// import { faker } from "@faker-js/faker";

//I think this is the most important file on the entire project
//this is the place from where we start and from the sun comes
//here we use custom hooks, useReducers, whole state and many things!
//and then distributing directly to the neccesarry components

export const globalContext = createContext<GlobalContext>({} as GlobalContext);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [filterOn, setFilterOn] = useState<boolean>(false);

  const [showMenu, switchMenuVisibility] = useMenu();
  const [currencyData, setCurrencyData, rates] = useExchangeRates();
  const [darkTheme, setDarkTheme] = useDarkTheme();

  const globalInitialState: GlobalState = {
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
        (product: IProduct) =>
          (product.price = Math.round(
            (Number(product.price) / rates[currencyData.from]) *
              rates[currencyData.to]
          ).toString())
      )
    );

    globalState.cart.filter(
      (product: IProduct) =>
        (product.price = Math.round(
          (Number(product.price) / rates[currencyData.from]) *
            rates[currencyData.to]
        ).toString())
    );
  }, [rates, currencyData]);

  console.log(globalState);

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
        switchMenuVisibility,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
