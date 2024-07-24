"use client";

import CustomerHeader from "@/app/_components/CustomerHeader";
import Footer from "@/app/_components/Footer";
import { useEffect, useState } from "react";

const page = (props) => {
  let name = props.params.name;
  const [restaurantDetail, setRestaurantDetail] = useState();
  const [foodItem, setFoodItem] = useState([]);
  const [cartData, setcartData] = useState();
  const [removeCartData, setRemoveCartData] = useState();

  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [cartIds, setCartIds] = useState(
    cartStorage
      ? () =>
          cartStorage.map((item) => {
            return item._id;
          })
      : []
  );

  const loadRestaurantDetail = async () => {
    const id = props.searchParams.id;

    let response = await fetch(`http://localhost:3000/api/customer/${id}`);

    response = await response.json();
    if (response.success) {
      setRestaurantDetail(response.result);
      setFoodItem(response.food);
    }
  };

  const addTocart = (item) => {
    setcartData(item);

    let localCartIds = cartIds;
    localCartIds.push(item._id);
    setCartIds(localCartIds);
    setRemoveCartData();
  };

  const removeFromCart = (id) => {
    setRemoveCartData(id);
    let localIds = cartIds.filter((item) => item != id);
    setCartIds(localIds);
    setcartData();
  };
  useEffect(() => {
    loadRestaurantDetail();
  }, []);
  return (
    <div>
      <CustomerHeader cartData={cartData} removeCartData={removeCartData} />
      <div className="main-page bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb')] object-cover h-[330px] w-full bg-no-repeat outline-none p-8 text-white      ">
        <h1 className="font-bold text-[65px] text-center pb-7 text-white ">
          {decodeURI(name)}
        </h1>
      </div>

      <div className=" flex border  border-balck bg-sky-500 h-auto   pb-3 p-2 justify-around ">
        <h3 className="font-bold  m-2">Contact : {restaurantDetail?.phone} </h3>
        <h3 className="font-bold  m-2">City : {restaurantDetail?.city} </h3>
        <h3 className="font-bold  m-2">
          Address : {restaurantDetail?.address}{" "}
        </h3>
        <h3 className="font-bold  m-2">Email : {restaurantDetail?.email} </h3>
      </div>
      <div>
        {foodItem.map((item) => (
          <div>
            <div className="flex m-3 ">
              <img
                className="w-[200px] h-[200px] rounded-sm "
                src={item.img_path}
                alt="food iamge"
              />
              <div className="m-2 font-semibold">
                <p>{item.foodname}</p>
                <p>{item.price}</p>
                <p className="font-light">{item.description}</p>

                {cartIds.includes(item._id) ? (
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="rounded-md p-3 bg-green-600 text-white font-bold"
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addTocart(item)}
                    className="rounded-md p-3 bg-green-600 text-white font-bold"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>

            <div className="h-[2px] bg- bg-sky-500 w-full"></div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default page;
