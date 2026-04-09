"use client";
import { CartContext } from " @/context/CartProvider";
import React, { use } from "react";
const CartItems = () => {
  const { cart } = use(CartContext);
  return <div>{cart.length} Items Added
   </div>;
};

export default CartItems;
// 70.5 ses 6 start