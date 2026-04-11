import React from "react";

export function generateStaticParams(){
  return[{id:'52898'},{id:'52955'},{id:'52926'}]
}
//  API call
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  const data = await res.json();
  return data.details;
};

// Page Component
const Page = async ({ params }) => {
  const { id } = await params; 
  const food = await getSingleFood(id);

  if (!food) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Food not Found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-2xl p-6">
        
        {/* 🔹 Image */}
        <div>
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </div>

        {/* 🔹 Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-black">{food.title}</h1>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {food.category}
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Area:</span> {food.area}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Price:</span> ৳{food.price}
          </p>

          {/* 🔹 Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
            Order Now
          </button>

          {/* 🔹 Video */}
          <div className="mt-6">
            <a
              href={food.video}
              target="_blank"
              className="text-blue-500 underline"
            >
              Watch Recipe Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;