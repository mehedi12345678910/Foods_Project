import FoodCardSkeleton from " @/components/skeletons/FoodCardSkeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
    {
        [...Array(12).map((_,index)=><FoodCardSkeleton key={index}></FoodCardSkeleton>)]
    }
    </div>
  );
};

export default Loading;