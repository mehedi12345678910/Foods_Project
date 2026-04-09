import React from 'react'

const loading = () => {
  return (
    <div>
        <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-300 rounded-xl"></div>

        {/* Text Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>

          {/* Button Skeleton */}
          <div className="h-10 bg-gray-300 rounded w-32"></div>

          {/* Link Skeleton */}
          <div className="h-4 bg-gray-300 rounded w-40 mt-4"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default loading
