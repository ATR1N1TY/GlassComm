import React, { useEffect, useState, createContext, useReducer } from "react";
import { globalReducer, filterReducer } from "./reducers";
import { productList } from "./data";
import { filterInitialState } from "./initialStates";
import {
  globalStateType,
  IProduct,
  FilterState,
  ExchangesRates,
  CurrencyData,
  GlobalAction,
  FilterAction,
} from "../types/types";
import useDarkTheme from "../hooks/useDarkTheme";
import useExchangeRates from "../hooks/useExchangeRates";
import useMenu from "../hooks/useMenu";

// import { faker } from "@faker-js/faker";

type GlobalContextType = {
  globalState: globalStateType;
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
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export const globalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [filterOn, setFilterOn] = useState<boolean>(false);

  const [showMenu, switchMenuVisibility] = useMenu();
  const [currencyData, setCurrencyData, rates] = useExchangeRates();
  const [darkTheme, setDarkTheme] = useDarkTheme();

  const globalInitialState: globalStateType = {
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
