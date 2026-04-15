"use client";
import React from "react";
import { format } from "date-fns";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, data } = feedback;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition">
      
      {/* Message */}
      <p className="text-gray-700 text-sm mb-3">
        {message}
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 mb-4">
        {format(new Date(data), "PPP p")}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(_id)}
          className="px-4 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="px-4 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;