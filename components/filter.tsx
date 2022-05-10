import React, { useContext } from "react";
import { globalContext } from "../context/context";

import { HiOutlineSearchCircle } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FcClearFilters } from "react-icons/fc";
import RatingComponent from "./ratingComponent";
import { FILTER_ACTIONS } from "../context/actions";

const Filter = () => {
  const {
    filterState: {
      include_out_of_stock,
      include_fast_delivery_only,
      by_ratings,
    },
    filterDispatch,
  } = useContext(globalContext);
  // console.log(include_out_of_stock, include_fast_delivery_only);

  // console.log(by_ratings);

  return (
    <div className="glass m-4 mt-8 p-4 rounded-full text-pink-50 text-base inline-flex items-center">
      {/* search */}
      <form action="filter flex">
        <input
          name="search"
          type="text"
          className="search glass rounded-full py-2 pl-4 pr-16 placeholder:text-pink-100"
          placeholder="Search food..."
          onChange={(e) =>
            filterDispatch({
              type: FILTER_ACTIONS.SEARCH_BY_QUERY,
              payload: e.target.value,
            })
          }
        />
        {/* <label htmlFor="search" className="ml-4">
          <HiOutlineSearchCircle
            className="inline h-full text-pink-200 hover:cursor-pointer "
            size={35}
          />
        </label> */}

        <label htmlFor="price" className="ml-4 font-bold">
          Price:
        </label>
        <input
          name="price"
          type="text"
          className="glass rounded-full mx-4 p-2  placeholder:text-pink-100 w-24 text-center"
          placeholder="MIN"
          onChange={(e) =>
            filterDispatch({
              type: FILTER_ACTIONS.REMOVE_PRICES_BELOW,
              payload: e.target.value,
            })
          }
        />
        <input
          name="price"
          type="text"
          className="glass rounded-full p-2 w-24 placeholder:text-pink-100 text-center "
          placeholder="MAX"
          onChange={(e) =>
            filterDispatch({
              type: FILTER_ACTIONS.REMOVE_PRICES_UPPER,
              payload: e.target.value,
            })
          }
        />

        <div className="ml-4 inline font-bold mr-4">Order:</div>
        <label htmlFor="desc">
          Ascending
          <input
            type="radio"
            name="desc"
            className="mx-2"
            onChange={() =>
              filterDispatch({
                type: FILTER_ACTIONS.SORT_BY_PRICE,
                payload: "ascending",
              })
            }
          />
        </label>
        <label htmlFor="desc">
          Descending
          <input
            type="radio"
            name="desc"
            className="mx-2"
            onChange={() =>
              filterDispatch({
                type: FILTER_ACTIONS.SORT_BY_PRICE,
                payload: "descending",
              })
            }
          />
        </label>

        <label htmlFor="byStock" className=" font-bold ml-2">
          Include Out of Stock
        </label>
        <input
          type="checkbox"
          name="byStock"
          className="ml-2"
          checked={include_out_of_stock}
          onChange={() =>
            filterDispatch({
              type: FILTER_ACTIONS.INCLUDE_OUT_OF_STOCK,
              payload: !include_out_of_stock,
            })
          }
        />

        <label htmlFor="byFastShipping" className=" font-bold ml-4">
          Fast Delivery
        </label>
        <input
          type="checkbox"
          name="byFastShipping"
          className="ml-2"
          checked={include_fast_delivery_only}
          onChange={() =>
            filterDispatch({
              type: FILTER_ACTIONS.SHOW_FAST_DELIVERY_ONLY,
              payload: !include_fast_delivery_only,
            })
          }
        />

        <RatingComponent productRating={by_ratings} dispatch={filterDispatch} />
        <div
          className="clear-filter inline hover:cursor-pointer ml-4"
          onClick={() => filterDispatch({ type: FILTER_ACTIONS.CLEAR_FILTER })}
        >
          <FcClearFilters size={30} className="inline" />
        </div>
      </form>

      {/* idea: როდესაც მომხმარებელი ქვემოთ ჩამოსქროლავს და ფილტერ კომპონენტი აღარ იქნება ეკრანზე,
      გადმოვიდეს ეს კომპონენტი ეკრანის მარცხნივ და პროდუქტლისტ კომპონენტმა ჩაიჩოჩოს მარჯვნივ, 
      ეს ყველაფერი ანიმაციით,
      ასევე ფილტერ კომპონენტმა უნდა გახდეს ვერტიკალური */}
    </div>
  );
};

export default Filter;
