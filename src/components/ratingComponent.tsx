import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FILTER_ACTIONS } from "../context/actions";
import { FilterAction } from "../types/types";

// I really like the working principle of this component
//we make array with the size of 5 if receifed product rating is less than current count render white star
//otherwise render outilend star
// and good thing is that it also works in filter component

const RatingComponent = (props: {
  productRating: number;
  dispatch?: React.Dispatch<FilterAction>;
}) => {
  const { productRating, dispatch } = props;

  return (
    <div className="rating inline xl:ml-2">
      {[...Array(5)].map((_, idx) => {
        return (
          <span className=" hover:cursor-pointer" key={idx}>
            {productRating >= idx ? (
              <AiFillStar
                className="inline"
                onClick={() =>
                  dispatch &&
                  dispatch({
                    type: FILTER_ACTIONS.SORT_BY_RATINGS,
                    payload: idx,
                  })
                }
                key={idx}
              />
            ) : (
              <AiOutlineStar
                className="inline"
                onClick={() =>
                  dispatch &&
                  dispatch({
                    type: FILTER_ACTIONS.SORT_BY_RATINGS,
                    payload: idx,
                  })
                }
                key={idx}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default RatingComponent;
