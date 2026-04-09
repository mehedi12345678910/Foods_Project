import ReviewSkeleton from ' @/components/skeletons/ReviewCardSkeleton'
import React from 'react'

const ReviewLoading = () => {
  return (
    <div  className="grid grid-cols-3 gap-5">
      {
        [...Array(12)].map((_,index)=><ReviewSkeleton key={index}></ReviewSkeleton>)
      }
    </div>
  )
}

export default ReviewLoading
