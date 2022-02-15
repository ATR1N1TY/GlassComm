import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="inputQuantity flex justify-between items-center w-32 p-3 bg-slate-100 rounded-xl">
      <button
        className="decrement font-bold text-xl text-orange-500"
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
      >
        <FaMinus />
      </button>
      <div className="screen font-bold">{quantity}</div>
      <button
        className="increment font-bold text-xl text-orange-500"
        onClick={() => setQuantity(quantity + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Quantity;
