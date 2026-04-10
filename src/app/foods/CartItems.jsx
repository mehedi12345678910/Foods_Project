"use client";

import { CartContext } from " @/context/CartProvider";
import React, { useContext } from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>{cart.length} Items Added</h2>

      {cart.map((item) => (
        <div key={item.id} className="border p-2 my-2 flex gap-3">
          <img className="" src={item.foodImg} width="50" />
          <h3>{item.title}</h3>
          <p>Price: {item.price} ৳</p>
        </div>
      ))}
    </div>
  );
};

export default CartItems;