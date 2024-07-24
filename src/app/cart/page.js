"use client";

import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import { DELIVERY_CHARGES, TAX } from "../lib/constant";

const page = () => {
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

  console.log(total);

  return (
    <div>
      <CustomerHeader />
      <div>
        {cartStorage.map((item) => (
          <div>
            <div className="flex m-3 ">
              <img
                className="w-[200px] h-[200px] rounded-sm "
                src={item.img_path}
                alt="food iamge"
              />
              <div className="m-2 font-semibold">
                <p>{item.foodname}</p>
                <p className="font-light">{item.description}</p>
                {
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="rounded-md p-3 mt-5  bg-green-600 text-white font-bold"
                  >
                    Remove From Cart
                  </button>
                }
              </div>
              <p className="font-bold m-3 text-end">Price : {item.price}</p>
            </div>

            <div className="h-[2px] bg- bg-sky-500 w-full"></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-wrap mt-4">
        <div className="flex justify-between ml-[20%] font-bold text-[20px] mr-[20%] ">
          <span>Food Charge : </span>
          <span>{total} </span>
        </div>

        <div className="flex justify-between ml-[20%] font-bold text-[20px] mr-[20%] ">
          <span>Tax : </span>
          <span>{(total * TAX) / 100} </span>
        </div>

        <div className="flex justify-between ml-[20%] font-bold text-[20px] mr-[20%] ">
          <span>Delivery Charge : </span>
          <span>{DELIVERY_CHARGES} </span>
        </div>

        <div className="flex justify-between ml-[20%] font-bold text-[20px] mr-[20%] ">
          <span>Total Amount : </span>
          <span>{total + DELIVERY_CHARGES + (total * TAX) / 100} </span>
        </div>
      </div>
      <div className="flex justify-center mt-3 ">
        <button className="p-2 w-56 rounded-xl font-bold text-2xl bg-orange-500 ">
          Order Now
        </button>
      </div>

      <div className="h-[2px] bg- bg-sky-500 w-full mt-8 mb-8"></div>

      <Footer />
    </div>
  );
};

export default page;
