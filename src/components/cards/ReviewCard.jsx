"use client";
import React, { useState } from "react";

const ReviewCard = ({ reviewData }) => {
  const [showFull, setShowFull] = useState(false);

  const {
    user,
    email,
    photo,
    rating,
    review,
    likes,
    date,
  } = reviewData;

  const shortText = review.slice(0, 120);

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 space-y-4">
      
      {/* 🔹 User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{user}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* 🔹 Rating */}
      <div className="text-yellow-500">
        {"⭐".repeat(rating)}
      </div>

      {/* 🔹 Review Text */}
      <p className="text-gray-700">
        {showFull ? review : `${shortText}...`}
        
        {review.length > 120 && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-blue-500 ml-2 cursor-pointer"
          >
            {showFull ? "Show Less" : "Read More"}
          </button>
        )}
      </p>

      {/* 🔹 Footer */}
      <div className="flex justify-between text-sm text-gray-500 cursor-pointer">
        <span>👍 {likes.length} Likes</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;