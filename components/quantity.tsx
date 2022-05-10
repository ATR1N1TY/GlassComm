import React, { useState, useContext, useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CART_ACTIONS } from "../context/actions";
import { globalContext } from "../context/context";
import { productList } from "../context/data";

const Quantity = ({ qty, identifier, maxQty }: any) => {
  const [quantIty, setQuantity] = useState(1);
  const { globalDispatch } = useContext(globalContext);
  // console.log(identifier);
  console.log("qty: " + qty);
  console.log(maxQty);

  const increment = () =>
    setQuantity(quantIty <= maxQty ? quantIty + 1 : quantIty);
  const decrement = () => setQuantity(quantIty <= 1 ? quantIty : quantIty - 1);

  useEffect(() => {
    globalDispatch({
      type: CART_ACTIONS.CHANGE_QTY,
      payload: { id: identifier, quantity: quantIty },
    });
  }, [qty, quantIty]);

  return (
    <div className="inputQuantity flex justify-between items-center w-32 p-3 bg-slate-100 rounded-xl">
      {qty < 2 ? (
        <button
          className="decrement font-bold text-xl text-orange-200"
          onClick={() => decrement()}
          disabled
        >
          <FaMinus />
        </button>
      ) : (
        <button
          className="decrement font-bold text-xl text-orange-500"
          onClick={() => decrement()}
        >
          <FaMinus />
        </button>
      )}
      <div className="screen font-bold">{qty}</div>
      {!(qty === maxQty) ? (
        <button
          className="increment font-bold text-xl text-orange-500"
          onClick={() => increment()}
        >
          <FaPlus />
        </button>
      ) : (
        <button
          className="increment font-bold text-xl text-orange-200"
          onClick={() => increment()}
          disabled
        >
          <FaPlus />
        </button>
      )}
    </div>
  );
};

//  ესეიგი, ამ კომპონენტმა მინდა შეცვალოს იმ პროდუქტის რაოდენობა რომლის აიდი

export default Quantity;
