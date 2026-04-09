import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 space-y-4 animate-pulse">
      
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-3 bg-gray-300 rounded w-32"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="h-4 bg-gray-300 rounded w-20"></div>

      {/* Review text */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between">
        <div className="h-3 bg-gray-300 rounded w-16"></div>
        <div className="h-3 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;