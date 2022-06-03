import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FILTER_ACTIONS } from "../context/actions";

// როგორ ავაწყო შეფასების კომპონენტი?
// შევქმნა ცარიელი ლისტი
// ლისტის თითოეული ელემენტის გავუკეთო მაპირება
// თითოეულ ელემენტს დავამატო onClick ლისენერი

// როდესაც მომხმარებელი დააჭერს ვარსკვლავს დაიბეჭდოს მისი ინდექსი

const RatingComponent = ({ productRating, dispatch }: any) => {
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
