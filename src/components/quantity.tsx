import React, { useState, useContext, useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CART_ACTIONS } from "../context/actions";
import { globalContext } from "../context/context";
import { productList } from "../context/data";

//Basic quantity component, it can increase the count of products and if there's no more products
// you can't really increased it more
//doens't go bellow zero

interface QuantityProps {
  qty: number;
  identifier: string;
  maxQty: number;
}

const Quantity = (props: QuantityProps) => {
  const { qty, identifier, maxQty } = props;
  const [quantity, setQuantity] = useState(1);
  const { globalDispatch } = useContext(globalContext);

  const increment = () =>
    setQuantity((quantity) => (quantity <= maxQty ? quantity + 1 : quantity));
  const decrement = () =>
    setQuantity((quantity) => (quantity <= 1 ? quantity : quantity - 1));

  useEffect(() => {
    globalDispatch({
      type: CART_ACTIONS.CHANGE_QTY,
      payload: { id: identifier, quantity: quantity },
    });
  }, [qty, quantity]);

  return (
    <div className="inputQuantity flex justify-between items-center min-w-24 lg:w-32 p-3 bg-slate-100 text-black rounded-xl">
      {qty < 2 ? (
        <button
          className="decrement font-bold md:text-xl text-orange-200"
          onClick={() => decrement()}
          disabled
        >
          <FaMinus />
        </button>
      ) : (
        <button
          className="decrement font-bold md:text-xl text-orange-500"
          onClick={() => decrement()}
        >
          <FaMinus />
        </button>
      )}
      <div className="screen font-bold mx-1">{qty}</div>
      {!(qty === maxQty) ? (
        <button
          className="increment font-bold md:text-xl text-orange-500"
          onClick={() => increment()}
        >
          <FaPlus />
        </button>
      ) : (
        <button
          className="increment font-bold md:text-xl text-orange-200"
          onClick={() => increment()}
          disabled
        >
          <FaPlus />
        </button>
      )}
    </div>
  );
};

export default Quantity;
