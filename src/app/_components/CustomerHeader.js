"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";

const CustomerHeader = (props) => {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  const [cartNumber, setCartNumber] = useState(cartStorage?.length);
  const [cartItem, setCartItem] = useState(cartStorage);

  useEffect(() => {
    if (props.cartData) {
      if (cartNumber) {
        if (cartItem[0].resto_id != props.cartData.resto_id) {
          localStorage.removeItem("cart");
          setCartNumber(1);
          setCartItem([props.cartData]);
          localStorage.setItem("cart", JSON.stringify([props.cartData]));
        } else {
          let locatCartItem = cartItem;
          locatCartItem.push(JSON.parse(JSON.stringify(props.cartData)));
          setCartItem(locatCartItem);
          setCartNumber(cartNumber + 1);
          localStorage.setItem("cart", JSON.stringify(locatCartItem));
        }
      } else {
        setCartNumber(1);
        setCartItem([props.cartData]);
        localStorage.setItem("cart", JSON.stringify([props.cartData]));
      }
    }
  }, [props.cartData]);

  useEffect(() => {
    if (props.removeCartData) {
      let localCartItem = cartItem.filter((item) => {
        return item._id != props.removeCartData;
      });
      setCartItem(localCartItem);
      setCartNumber(cartItem - 1);
      localStorage.setItem("cart", JSON.stringify(localCartItem));

      if (localCartItem.length == 0) {
        localStorage.removeItem("cart");
      }
    }
  }, [props.removeCartData]);
  return (
    <>
      <div className="bg-gray-600 flex items-center">
        <MdDeliveryDining className="ml-5" size={60} />
        <ul className="flex items-center ml-5">
          <li className="font-bold text-white text-18">
            <Link href="/">Home</Link>
          </li>

          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Login</Link>
          </li>

          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Signup</Link>
          </li>

          <li className="ml-5 font-bold text-white text-18">
            <Link href={cartNumber?"/cart":"#"}>Cart({cartNumber ? cartNumber : 0})</Link>
          </li>

          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Add Restaurant</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CustomerHeader;
