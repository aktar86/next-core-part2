import FeedbackBtn from "@/components/Buttons/FeedbackBtn";
import Link from "next/link";
import React from "react";

const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback");
  return await res.json();
};

const FeedBack = async () => {
  const feedbacks = await getFeedback();

  return (
    <div>
      <h3>Feedback {feedbacks.length}</h3>
      <div className="my-10">
        <Link
          href={"/add"}
          className="px-10 py-2 bg-amber-400 rounded-2xl my-10"
        >
          Add Feedback
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="border rounded-xl bg-gray-900 text-white p-5"
          >
            <small>{feedback._id}</small>
            <h2>{feedback.message}</h2>
            <p>
              {new Date(feedback.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            {/* buttons */}
            <FeedbackBtn feedback={feedback} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
