import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../context/context";
import CartProductCard from "../components/cartProductCard";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import Image from "next/image";
import atrinityLogo from "../public/LOGO.jpg";
import { product } from "../context/context";
import { RiShoppingCartLine } from "react-icons/ri";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    globalState: { cart },
    globalDispatch,
  } = useContext(globalContext);

  useEffect(() => {
    setTotalPrice(
      cart.reduce(
        (acc: number, curr: any) => acc + curr.price * curr.quantity,
        0
      )
    );
  }, [cart]);

  //idea:
  // დავუარო კარტის ლისტს reduce ფუნქციით, და აკუმულატორში მოვათავსო cart.reduce(()) acc += p.price * p.quantity

  return (
    <div className="cartPage bg-gradient-to-tr  from-red-300 to-red-700">
      <Navbar />
      {!cart.length ? (
        <div className="infod h-screen flex justify-center items-center font-bold text-9xl">
          Your <RiShoppingCartLine className="mx-4" /> is MT!{" "}
          <span className=" text-xs align-bottom  relative">(Empty)</span>
        </div>
      ) : (
        <section className="cartProductList min-h-[100vh]">
          {/* <div className="information w-screen flex justify-center items-center text-bold text-4xl m-8">
            SCROLL DOWN TO SEE SUBTOTAL 👇
          </div> */}
          <div className="productContainer overflow-auto p-8 mt-4 w-full flex flex-col items-center justify-center">
            {cart.map((product: product) => (
              <CartProductCard
                key={product.id}
                product={product}
                dispatch={globalDispatch}
              />
            ))}
          </div>
          <footer className="checkout rounded-3xl checkoutBg text-yellow-900 p-8 m-4 h-96 flex items-center justify-around">
            <div className="credit hover:animate-pulse font-bold mx-4 text-3xl relative">
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
            <div className="total border-4 border-orange-900 rounded-lg p-4 w-1/4">
              <p className="tot font-bold text-2xl mb-4">
                SUBTOTAL ${totalPrice} - ({cart.length}) Unique items
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
        </section>
      )}
    </div>
  );
};

export default Cart;
