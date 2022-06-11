import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../context/context";
import CartProductCard from "../components/cartProductCard";
import Logo from "../components/logo";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";
import atrinityLogo from "../../public/LOGO.jpg";
import { Product } from "../types/types";
import { RiShoppingCartLine } from "react-icons/ri";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    globalState: { cart },
    globalDispatch,
    darkTheme,
    currencyData,
  } = useContext(globalContext);

  useEffect(() => {
    // console.log(totalPrice);
    setTotalPrice(
      (totalPrice) =>
        (totalPrice = cart.reduce(
          (acc: number, curr: any) => acc + curr.price * curr.quantity,
          0
        ))
    );
  }, [cart, currencyData]);

  return (
    <div className="cartPage bg-gradient-to-tr  from-red-300 to-red-700 dark:from-zinc-900 dark:to-slate-900">
      <Navbar />
      {!cart.length ? (
        <main className="infod h-screen flex justify-center items-center font-bold text-5xl  md:text-9xl dark:text-slate-200">
          Your <RiShoppingCartLine className="mx-4" /> is MT!{" "}
          <span className=" text-xs align-bottom  relative">(Empty)</span>
        </main>
      ) : (
        <main className="cartProductList min-h-[100vh]">
          <div className="productContainer overflow-auto p-2 lg:p-8 mt-4 w-full flex flex-col items-center justify-center">
            {cart.map((product: Product) => (
              <CartProductCard
                key={product.id}
                product={product}
                dispatch={globalDispatch}
              />
            ))}
          </div>
          <footer
            className={`checkout rounded-3xl ${
              darkTheme ? "checkoutBgDark" : "checkoutBg"
            } text-yellow-900 dark:text-slate-200 p-8 lg:m-4 lg:h-96 flex items-center justify-around flex-col md:flex-row`}
          >
            <div className="credit hover:animate-pulse font-bold my-8 lg:mx-4 text-xl md:text-3xl relative">
              <Logo />
              <p>
                Made with 💖 By{" "}
                <a href="https://github.com/atr1n1ty">ATR!N!TY</a>{" "}
              </p>
              <div className="absolute spinner -top-2 left-2/3 ">
                <Image
                  src={atrinityLogo}
                  width={"50px"}
                  height={"50px"}
                  className="rounded-full"
                  alt="r"
                />
              </div>
            </div>
            <div className="total border-4 border-orange-900 dark:border-pink-100 rounded-lg p-4">
              <p className="tot font-bold text-2xl mb-4">
                SUBTOTAL {currencyData.to} {totalPrice} - ({cart.length}) Unique
                items
              </p>
              <form action="check ">
                <input type="checkbox" name="box" />
                <label htmlFor="box ">
                  {" "}
                  I agree to
                  <span className=" text-slate-900 font-bold ">
                    {" "}
                    Terms & Conditions
                  </span>
                </label>
              </form>
              <button className="checkout bg-neutral-800 text-white px-8 py-4 mt-4 font-bold">
                CHECKOUT
              </button>
              <button className="paypal bg-blue-50 text-slate-700 px-8 py-4 mt-4 font-bold ml-4">
                PayPal
              </button>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Cart;
