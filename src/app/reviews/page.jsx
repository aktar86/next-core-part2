import ReviewCard from "@/components/ReviewCard/ReviewCard";
import Title from "@/components/Title/Title";

const Reviews = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/reviews",
    { cache: "no-store" } // always fresh data
  );

  const data = await res.json();

  return (
    <div className="py-10 mx-auto px-4">
      <Title>This is Reviews Page</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
