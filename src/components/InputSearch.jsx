"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
    const router=useRouter();
    const params=useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form =e.target;
    const value=form.search.value;
    
    const newParams=new URLSearchParams(params.toString());
    newParams.set("search",value);
    router.push(`?${newParams.toString()}`)
  };
  return (
   <div className="flex justify-center items-center p-8">
  <form 
    onSubmit={handleSubmit} 
    className="flex w-full max-w-2xl items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-100 focus-within:ring-2 focus-within:ring-yellow-400 transition-all duration-300"
  >
    {/* Search Icon (Optional but looks great) */}
    <div className="pl-6 text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <input
      name="search"
      type="text"
      placeholder="Search for delicious food..."
      className="w-full px-4 py-4 text-gray-700 focus:outline-none bg-transparent placeholder-gray-400 font-medium"
    />

    <button 
      type="submit"
      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-8 py-4 transition-all duration-200 active:scale-95"
    >
      Search
    </button>
  </form>
</div>
  );
};

export default InputSearch;
