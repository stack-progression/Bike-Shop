import React, { useContext } from "react";
import "./ReviewsItem.css";
import { ShopContext } from "../../Context/ShopContext";

const ReviewsItem = (r) => {

  const { stars } = useContext(ShopContext);
  return (
    <div key={r.id} className="reviews-item">
      <div className="reviews-item-container">
        {stars(r.stars)}
        <p>{r.date}</p>
      </div>
      <p className="user-name">
        Nume: <span>{r.fullNane}</span>
      </p>
      <hr />
      <p className="title">{r.title}</p>
      <p className="comment">{r.comment}</p>
    </div>
  );
};

export default ReviewsItem;
