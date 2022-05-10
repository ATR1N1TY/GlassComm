import React, { useState, useContext } from "react";
import { globalContext } from "../context/context";
import { CURRENCY_ACTIONS } from "../context/actions";
import { RiExchangeDollarLine } from "react-icons/ri";

const Exchange = () => {
  const currencies = ["USD $", "EUR €", "JPY ¥", "GBP £", "GEL ₾"];
  const { currencyDispatch } = useContext(globalContext);

  // როდესაც დავაჭერ EUR
  //უნდა გაეშვას დისპაჩ ფუნქცია რომელიც ფეილოადად გადასცემს რედიუსერს "EUR"
  //რედიუსერი ადგება და globalState.currencyად დააყენებს ამ "EUR"ოს

  //ან მეორე შემთხვევაში შეგვიძლია ამ კომპონენტს setCurrency ფუნქცია გადავცეთ და დავაყენოთ "EUR"ოზე
  //როდესაც setCurrency შეიცვლება:
  //1. გავუშვათ fetch ფუნქცია და გადავცეთ to "EUR" from globalState.currency
  //2. globalState.currency = "EUR"
  //3. products = product.map((product) => product.price = product.price * rate)

  //ან მესამე შემთხვევაში მათი საშუალო გავაკეთოთ:
  //1. 1. გავუშვათ fetch ფუნქცია და გადავცეთ to "EUR" from globalState.currency

  return (
    <div className="dropdown ">
      <div className="dropbtn">
        <RiExchangeDollarLine />
      </div>
      <div className="dropdown-content glass rounded-xl">
        {currencies.map((currency, idx) => (
          <span
            className="option"
            key={idx}
            onClick={(e) => {
              currencyDispatch({
                type: CURRENCY_ACTIONS.CHANGE_CURRENCY,
                payload: e.currentTarget.innerText.split(" ")[0],
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
// ხელმისაწვდომი ვალუტებია: USD, EUR, GBP, GEL, JPY,

export default Exchange;
