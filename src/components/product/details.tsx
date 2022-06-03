import React from "react";
import { Product } from "../../types/types";
import Quantity from "../quantity";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import RatingComponent from "../ratingComponent";
import { CART_ACTIONS } from "../../context/actions";

const Details = (props: {
  product: Product;
  cart: Product[];
  dispatch: any;
  currency: number;
}) => {
  const { product, cart, dispatch, currency } = props;
  // console.log(cart);

  return (
    <section className="details glass rounded-3xl p-8 lg:w-1/3 2xl:h-auto mt-8 lg:mt-0 m-4">
      <h4 className="delivery uppercase font-bold xl:text-md  2xl:text-xl text-orange-500 mb-2">
        {product.fastDelivery ? "FAST DELIVERY" : ""}
      </h4>

      <h1 className="title font-bold text-2xl xl:text-5xl 2xl:text-6xl text-gray-800">
        {product.name}
      </h1>

      <p className="description text-lg sm:my-4 2xl:my-8">
        {product.description}
      </p>

      <div className="price">
        <div className="currentPrice inline-flex flex-row text-3xl font-bold">
          <h3>
            {product.price} {currency}
          </h3>
          {/* <h3 className="discount block mx-6 px-2 bg-orange-100 rounded-sm text-orange-500">
            50%
          </h3> */}
        </div>
        <div className="ratings block text-slate-600 font-bold mt-2 mb-8 -ml-2 ">
          <RatingComponent productRating={product.ratings} />
        </div>
      </div>

      <footer className="options flex">
        {/* <Quantity /> */}
        {!cart.some((prod: Product) => prod?.id == product.id) ? (
          <button
            className="btn  px-16 rounded-xl text-amber-50 font-bold bg-orange-500 drop-shadow-md p-4"
            onClick={() =>
              dispatch({ type: CART_ACTIONS.ADD_PRODUCT, payload: product })
            }
          >
            <RiShoppingCartLine className="inline font-bold" /> Add to cart
          </button>
        ) : (
          <button
            className="btn  px-16 rounded-xl text-amber-50 font-bold bg-orange-800 drop-shadow-md p-4"
            onClick={() =>
              dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, payload: product })
            }
          >
            <RiShoppingCartFill className="inline font-bold" /> Added to cart!
          </button>
        )}
      </footer>
    </section>
  );
};

export default Details;
