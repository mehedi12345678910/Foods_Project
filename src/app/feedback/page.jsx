
import FeedbackCard from " @/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "feedbacks",
};
const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback/",{
    cache:"force-cache",
    next:{revalidate:60},
  });
  return await res.json();
};
const feedbackPage = async () => {
  const feedback = await getFeedback();
  console.log(feedback);
  return (
    <div>
      <div className="">
        <h3 className="text-2xl font-bold">
          ({feedback.length}) Feedbacks Found{" "}
        </h3>
        <div className="my-5">
          <Link className="btn" href={"/feedback/add"}>Add Feedback</Link>
        </div>

        <div className="my-3 space-y-5 grid grid-cols-3 gap-3">
          {feedback.map((fd) => (
            <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default feedbackPage;
