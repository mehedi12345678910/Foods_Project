"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Eye } from "lucide-react"; 
import Link from "next/link";
import CardButton from "../button/CardButton";

const FoodCard = ({ food }) => {
const {title,foodImg,category,price,id}=food

  return (
    <div className="group relative bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">

      {/* Image Section */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={foodImg}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge (e.g., Category or Discount) */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {category}
        </span>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
          <Heart size={20} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-gray-500 text-xs ml-1">(4.8)</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
          Deliciously prepared {food.title} with the finest ingredients.
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Price</p>
            <p className="text-2xl font-black text-gray-900">
              ৳ {price}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
             <Link href={`/foods/${id}`}
              className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
              title="View Details"
            >
              <Eye size={20} />
            </Link>
              <CardButton food={food}/>     
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;