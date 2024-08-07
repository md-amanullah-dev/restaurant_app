"use client";

import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import { DELIVERY_CHARGES, TAX } from "../lib/constant";

const page = () => {
  const [userStorage, setUserStorage] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const [total] = useState(() =>
    cartStorage.length == 1
      ? cartStorage[0].price
      : cartStorage.reduce((a, b) => {
          return a.price + b.price;
        })
  );

  const placeOrder = async () => {
    let user_id = JSON.parse(localStorage.getItem("user"))._id;
    let cart = JSON.parse(localStorage.getItem("cart"));
    let foodItemIds = cart.map((item) => item._id).toString();
    let resto_id = cart[0].resto_id;
    let deliveryBoy_id = "669f40036099ecf18d525c4b";

    let collections = {
      user_id,
      foodItemIds,
      resto_id,
      deliveryBoy_id,
      status: "confirm",
      amount: total + DELIVERY_CHARGES + (total * TAX) / 100,
    };

    let response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify(collections),
    });

    response = await response.json();
    if (response.success) {
      alert("Order confirm place successfully!");
    } else {
      alert("Order failed");
    }
  };

  return (
    <div>
      <CustomerHeader />

      <div className="flex flex-col flex-wrap mt-4">
        <div className="flex flex-col flex-wrap mt-4">
          <h2 className="text-center font-bold text-2xl ">User Details</h2>
          <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
            <span>Name </span>
            <span>{userStorage.name} </span>
          </div>
          <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
            <span>Address </span>
            <span>{userStorage.address} </span>
          </div>
          <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
            <span>Mobile </span>
            <span>{userStorage.phone} </span>
          </div>
        </div>
        <h2 className="text-center font-bold text-2xl">Amount Details</h2>

        <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
          <span>Food Charge : </span>
          <span>{total} </span>
        </div>

        <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
          <span>Tax : </span>
          <span>{(total * TAX) / 100} </span>
        </div>

        <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
          <span>Delivery Charge : </span>
          <span>{DELIVERY_CHARGES} </span>
        </div>

        <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
          <span>Total Amount : </span>
          <span>{total + DELIVERY_CHARGES + (total * TAX) / 100} </span>
        </div>
      </div>

      <h1 className="text-center font-bold text-2xl">Payment Mode</h1>
      <div className="flex justify-between ml-[20%] font-semibold text-[20px] mr-[20%] ">
        <span>Cash on Delivery : </span>
        <span>{total + DELIVERY_CHARGES + (total * TAX) / 100} </span>
      </div>

      <div className="flex justify-center mt-3 ">
        <button
          onClick={placeOrder}
          className="p-2 w-auto rounded-xl font-bold text-2xl bg-orange-500 "
        >
          Place Your Order Now
        </button>
      </div>

      <div className="h-[2px] bg- bg-sky-500 w-full mt-8 mb-8"></div>

      <Footer />
    </div>
  );
};

export default page;
