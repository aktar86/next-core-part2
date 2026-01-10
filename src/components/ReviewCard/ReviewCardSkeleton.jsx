const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-md animate-pulse">
      {/* User info */}
      <div className="flex items-center gap-4 mb-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>

        {/* Name & date */}
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
          <div className="w-24 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
        ))}
      </div>

      {/* Review title / short text */}
      <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>

      {/* Comment */}
      <div className="space-y-2">
        <div className="w-full h-3 bg-gray-200 rounded"></div>
        <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
        <div className="w-4/6 h-3 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
