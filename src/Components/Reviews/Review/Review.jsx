import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa6";

const Review = ({ review }) => {
  const { user_name, rating, date, title, review_text } = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl border border-black">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{user_name}</h2>
            <p>{date}</p>
            <div className="flex items-center gap-2">
              <Rating
                initialRating={rating}
                emptySymbol={<FaRegStar className="text-orange-400" />}
                fullSymbol={<FaStar className="text-orange-400" />}
              />
              <p>{rating}</p>
            </div>
            <p className="mb-3 text-indigo-500">{title}</p>
            <p>{review_text.length > 150 ? `${review_text.slice(0.15)}...` : review_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
