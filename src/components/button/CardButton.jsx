"use client";
import { CartContext } from " @/context/CartProvider";
import { ShoppingCart } from "lucide-react";
import React, { use, useState } from "react";

const CardButton = ({food}) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart}=use(CartContext)
  const handleAdd2Cart=()=>{
    addToCart(food);
    setInCart(true)
  }
  return (
    <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      className="flex items-center gap-2 bg-yellow-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-black hover:shadow-lg transition-all active:scale-95 disabled:bg-gray-600"
    >
      <ShoppingCart size={18} />
      {inCart ? "Added":'Add To Cart'}
    </button>
  );
};

export default CardButton;
