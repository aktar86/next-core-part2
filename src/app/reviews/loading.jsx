import ReviewCardSkeleton from "@/components/ReviewCard/ReviewCardSkeleton";

const Loading = () => {
  return (
    <div className="py-10  px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
