import FeedbackBtn from "@/components/Buttons/FeedbackBtn";
import React from "react";

const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback");
  return await res.json();
};

const FeedBack = async () => {
  const feedbacks = await getFeedback();

  return (
    <div>
      Feedback {feedbacks.length}
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
