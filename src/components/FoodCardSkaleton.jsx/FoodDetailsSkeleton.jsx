const DetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10 animate-pulse">
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row h-full md:h-[500px]">
        {/* Image Skeleton */}
        <div className="md:w-1/2 bg-gray-200 h-[400px] md:h-full"></div>

        {/* Text Details Skeleton */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-5">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>

          <div className="space-y-2">
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>

          <div className="flex gap-4 pt-4">
            <div className="h-14 bg-gray-200 rounded-2xl w-32"></div>
            <div className="h-14 bg-gray-200 rounded-2xl w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
