import React, { useContext, useEffect, useRef } from "react";
import "./Reviews.css";
import { ShopContext } from "../../Context/ShopContext";
import { useReviews } from "../../Hooks/useReviews";
import ReviewsItem from "../ReviewsItem/ReviewsItem";

const Reviews = (p) => {
  const item = p.p;
  // console.log(item);
  const containerRef = useRef();
  const { data: reviews, isPending: reviewsLoading } = useReviews();
  const { stars, heightContainer, setHeightContainer } =
    useContext(ShopContext);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current && reviews) {
        // console.log(containerRef.current);
        const items = containerRef.current.querySelectorAll(".reviews-item");
        const firstItem = items[0] || items[13] || items[items.length - 1];
        const firstHeight = firstItem.getBoundingClientRect().height;

        console.log("Înălțime primul element:", firstHeight);

        requestAnimationFrame(() => {
          const items = containerRef.current.querySelectorAll(".reviews-item");
          const firstItem = items[0] || items[13] || items[items.length - 1];
          if (!firstItem) return;

          const height = firstItem.getBoundingClientRect().height;
          if (height > 0) {
            // Aplică offset în funcție de lățimea ferestrei
            const width = window.innerWidth;
            let offset = 30;
            if (width < 849) offset = 50;
            else if (width >= 850) offset = 100;

            setHeightContainer(height + offset);
          }
        });
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [reviews, setHeightContainer]);

  if (reviewsLoading) return "Loading...";
  // console.log(reviews);

  const filterId = reviews.filter((e) => e.productId === item.id);
  if (filterId.length <= 0) return null;
  // console.log(filterId);
  // console.log(filterId.length <= 0);
  console.log(heightContainer);

  return (
    <div
      className="reviews"
      style={{
        display: filterId.length <= 0 ? "none" : "",
        height: `${heightContainer}px`,
      }}
    >
      <h2>Recenzii</h2>
      <div className="rating">
        <p>{item?.rating}</p>
        <div className="stars-list">{stars(item.rating)}</div>
        <p>({item?.reviewCount}) Recenzii</p>
      </div>
      <div className="rating-list">
        <div className="rating-list-container" ref={containerRef}>
          {filterId?.map((i) => {
            return (
              <ReviewsItem
                rev={filterId}
                nr={filterId.length}
                key={i.id}
                stars={i.rating}
                date={i.createdAt}
                fullNane={i.userName}
                title={i.title}
                comment={i.comment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
