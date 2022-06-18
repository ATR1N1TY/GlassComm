import React, { useState, useContext } from "react";
import { globalContext } from "../context/context";
import { CURRENCY_ACTIONS } from "../context/actions";
import { RiExchangeDollarLine } from "react-icons/ri";

const Exchange = () => {
  // ["USD $", "EUR €", "JPY ¥", "GBP £", "GEL ₾"];
  const { currencyData, setCurrencyData, rates } = useContext(globalContext);
  const currencies = Object.keys(rates);
  // console.log(Object.keys(rates));

  return (
    <div className="dropdown relative inline-block">
      <div className="dropbtn">
        <RiExchangeDollarLine />
      </div>
      <div className="dropdown-content hidden absolute glass rounded-xl max-h-64 overflow-y-auto overflow-x-hidden ">
        {currencies.map((currency, idx) => (
          <span
            className="option block hover:bg-zinc-100/25 hover:rounded-md  text-black px-4 py-3"
            key={idx}
            onClick={(e) => {
              setCurrencyData({
                ...currencyData,
                to: e.currentTarget.innerText,
                from: currencyData.to,
              });
            }}
          >
            {currency}
          </span>
        ))}
      </div>
    </div>
  );
};

// setCurrencyData({...currencyData, to:e.currentTarget.innerText.split(" ")[0], from: currencyData.to})
// ხელმისაწვდომი ვალუტებია: USD, EUR, GBP, GEL, JPY,

export default Exchange;
