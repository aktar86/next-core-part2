import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  const { name, photo, rating, comment, date } = review;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-md ">
      {/* User info */}
      <div className="flex items-center gap-4 mb-3">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }
          />
        ))}
      </div>

      <div className="text-black">{review.review}</div>

      {/* Comment */}
      <p className=" text-sm leading-relaxed">{comment}</p>
    </div>
  );
};

export default ReviewCard;
