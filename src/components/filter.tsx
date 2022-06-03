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

  return (
    <div className="glass bgGlass xl:static my-8 p-4 xl:m-4 xl:mt-8 xl:p-4 rounded-2xl xl:rounded-full  text-pink-50 text-base xl:inline-flex xl:justify-center xl:items-center 2xl:items-center  xl:w-auto">
      <form
        action="filter"
        className="flex xl:w-auto flex-col xl:flex-row xl:h-10 xl:items-center justify-evenly "
      >
        {/* searchbar */}
        <input
          name="search"
          type="text"
          className="search glass rounded-full px-4 py-2 xl:pl-4 2xl:py-2 2xl:pl-4 xl:pr-16 placeholder:text-pink-100 dark:placeholder:text-gray-800"
          placeholder="Search food..."
          onChange={(e) =>
            filterDispatch({
              type: FILTER_ACTIONS.SEARCH_BY_QUERY,
              payload: e.target.value,
            })
          }
        />

        {/* price selectors */}
        <div className="priceFilter my-4 xl:my-0">
          <label
            htmlFor="price"
            className="xl:ml-4 font-bold justify-evenly xl:hidden 2xl:inline"
          >
            Price:
          </label>
          <input
            name="price"
            type="text"
            className="glass rounded-full xl:w-24 xl:mx-4 p-2 placeholder:text-pink-100  text-center m-4 xl:m-0"
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
            className="glass rounded-full  xl:w-24 mt-2 p-2  placeholder:text-pink-100 text-center m-4 xl:m-0"
            placeholder="MAX"
            onChange={(e) =>
              filterDispatch({
                type: FILTER_ACTIONS.REMOVE_PRICES_UPPER,
                payload: e.target.value,
              })
            }
          />
        </div>

        {/* price order: ascending or descending */}
        <div className="xl:ml-4 inline font-bold xl:m-4 xl:my-4 xl:inline xl:hidden 2xl:inline ">
          Order:
        </div>
        <label htmlFor="desc" className="xl:ml-2">
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

        {/* filter by stock */}
        <label htmlFor="byStock" className=" font-bold mt-4 xl:ml-2 xl:my-4">
          Include Out of Stock
        </label>
        <input
          type="checkbox"
          name="byStock"
          className="xl:ml-2"
          checked={include_out_of_stock}
          onChange={() =>
            filterDispatch({
              type: FILTER_ACTIONS.INCLUDE_OUT_OF_STOCK,
              payload: !include_out_of_stock,
            })
          }
        />
        {/* include fast delivery */}
        <label
          htmlFor="byFastShipping"
          className="mt-4 xl:mt-0 font-bold xl:ml-4"
        >
          Fast Delivery
        </label>
        <input
          type="checkbox"
          name="byFastShipping"
          className="xl:ml-2 xl:m-4"
          checked={include_fast_delivery_only}
          onChange={() =>
            filterDispatch({
              type: FILTER_ACTIONS.SHOW_FAST_DELIVERY_ONLY,
              payload: !include_fast_delivery_only,
            })
          }
        />

        {/* filter by ratings */}
        <div className="rating mt-4 xl:mt-0 xl:inline">
          <RatingComponent
            productRating={by_ratings}
            dispatch={filterDispatch}
          />
        </div>

        {/* clear filter */}
        <div
          className="clear-filter inline hover:cursor-pointer ml-4"
          onClick={() => filterDispatch({ type: FILTER_ACTIONS.CLEAR_FILTER })}
        >
          <FcClearFilters size={30} className="inline" />
        </div>
      </form>
    </div>
  );
};

export default Filter;
