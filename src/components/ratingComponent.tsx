import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FILTER_ACTIONS } from "../context/actions";
import { FilterAction } from "../types/types";

// როგორ ავაწყო შეფასების კომპონენტი?
// შევქმნა ცარიელი ლისტი
// ლისტის თითოეული ელემენტის გავუკეთო მაპირება
// თითოეულ ელემენტს დავამატო onClick ლისენერი

// როდესაც მომხმარებელი დააჭერს ვარსკვლავს დაიბეჭდოს მისი ინდექსი

const RatingComponent = (props: {
  productRating: number;
  dispatch?: React.Dispatch<FilterAction>;
}) => {
  const { productRating, dispatch } = props;
  // const [rating, setRating] = useState(productRating);
  // useEffect(() => {
  //   console.log(productRating);
  // }, [dispatch]);

  return (
    <div className="rating inline xl:ml-2">
      {[...Array(5)].map((_, idx) => {
        // console.log(idx);

        return (
          <span className=" hover:cursor-pointer" key={idx}>
            {productRating >= idx ? (
              <AiFillStar
                className="inline"
                // onClick={() => setRating(idx + 1)}
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
                // onClick={() => setRating(idx + 1)}
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
