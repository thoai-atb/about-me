import { FaRegStar, FaStar } from "react-icons/fa";

// StarRating component interface
interface StarRatingProps {
  rating: number;
  size?: number;
  maxStars?: number;
}

const StarRating = ({ rating, size = 1.2, maxStars = 5 }: StarRatingProps) => {
  return (
    <div className="relative flex items-center">
      {/* Empty Stars */}
      <div className="relative flex">
        {[...Array(maxStars)].map((_, index) => (
          <div key={index} style={{ width: `${size}rem` }}>
            <FaRegStar className="text-secondary-600" />
          </div>
        ))}
      </div>

      {/* Filled Stars */}
      <div className="absolute flex">
        {[...Array(Math.ceil(rating))].map((_, index) => (
          <div
            key={index}
            className="overflow-hidden"
            style={
              index === Math.floor(rating)
                ? {
                    width: `${size * (rating - Math.floor(rating))}rem`,
                  }
                : { width: `${size}rem` }
            }
          >
            <FaStar className="text-secondary-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
