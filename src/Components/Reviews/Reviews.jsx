import { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // SHOw more function
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="my-28">
      <h1 className="text-center mt-10 mb-10 text-3xl">Read What Our Customers Say</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {showMore ? (
          <>
            {reviews.slice(0,3).map((review) => {
              return <Review key={review.id} review={review} />;
            })}
          </>
        ) : (
          <>
            {reviews.map((review) => {
              return <Review key={review.id} review={review} />;
            })}
          </>
        )}
      </div>
      <div className="flex justify-center my-10">
        <button onClick={handleShowMore} className="btn bg-black text-white hover:text-black">
          {showMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
