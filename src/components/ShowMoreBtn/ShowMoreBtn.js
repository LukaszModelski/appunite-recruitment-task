import React from "react";
import { useDispatch } from "react-redux";
import { incrementPageNr } from "../../store/actions";

export const ShowMoreBtn = () => {
  const dispatch = useDispatch();

  const showMoreArticles = () => {
    dispatch(incrementPageNr());
  }

  return (
    <button onClick={showMoreArticles} className="show-more-btn">
      Show More
    </button>
  );
};
