import React, { useContext } from "react";
import { globalContext } from "../context/context";
import CartProductCard from "../components/cartProductCard";
import Navbar from "../components/navbar/navbar";
import { IProduct } from "../types/types";
import { RiShoppingCartLine } from "react-icons/ri";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
import Footer from "../components/footer";

//here we are mapping through cart object if theres nothing in cart we render that there's nothing
// if there's something we render that somethings(products)

const Cart = () => {
  const {
    globalState: { cart },
    globalDispatch,
    darkTheme,
    currencyData,
  } = useContext(globalContext);

  return (
    <div className="cartPage bg-gradient-to-tr  from-red-300 to-red-700 dark:from-zinc-900 dark:to-slate-900">
      <Navbar />
      <HamburgerMenu />

      {!cart.length ? (
        <main className="infod h-screen flex justify-center items-center font-bold text-5xl  md:text-9xl dark:text-slate-200">
          Your <RiShoppingCartLine className="mx-4" /> is MT!{" "}
          <span className=" text-xs align-bottom  relative">(Empty)</span>
        </main>
      ) : (
        <main className="cartProductList min-h-[100vh]">
          <HamburgerMenu />

          <div className="productContainer overflow-auto p-2 lg:p-8 mt-4 w-full flex flex-col items-center justify-center">
            {cart.map((product: IProduct) => (
              <CartProductCard
                key={product.id}
                product={product}
                dispatch={globalDispatch}
              />
            ))}
          </div>
          <Footer
            darkTheme={darkTheme}
            cart={cart}
            currencyData={currencyData}
          />
        </main>
      )}
    </div>
  );
};

export default Cart;
