"use client";
import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [restaurant, setRestaurant] = useState([]);

  const router = useRouter();
  const loadLocations = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations");
    response = await response.json();

    if (response.success) {
      setLocation(response.result);
    }
  };

  const loadRestaurantList = async (params) => {
    let url = "http://localhost:3000/api/customer";
    if (params?.location) {
      url = url + "?location=" + params.location;
    } else if (params?.restaurant) {
      url = url + "?restaurant=" + params.restaurant;
    }
    let response = await fetch(url);
    response = await response.json();
    if (response.success) {
      setRestaurant(response.result);
    }
  };

  useEffect(() => {
    loadLocations();
    loadRestaurantList();
  }, []);

  const handleListItem = (city) => {
    setSelectedLocation(city);
    setShowLocation(false);
    loadRestaurantList({ location: city });
  };

  return (
    <main>
      <CustomerHeader />
      <div className="main-page bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb')] object-cover h-[330px] w-full bg-no-repeat outline-none p-8 text-white brightness-75 ">
        <h1 className="font-bold text-2xl text-center pb-7 text-gray-300 ">
          Food Delivery App
        </h1>
        <div className=" bg-white p-5 m-auto rounded-md border border-solid border-gray-200 w-[70%] ">
          <input
            className="h-[40px] text-black border-none w-[30%] pl-4 "
            type="text"
            placeholder="Select place"
            onClick={() => setShowLocation(true)}
            value={selectedLocation}
          />

          <ul className="text-black list-none text-left absolute bg-white m-0 p-2 ml-[-21px] border border-solid border-gray-650  rounded-md">
            {showLocation &&
              location.map((city) => (
                <li
                  onClick={() => handleListItem(city)}
                  className="w-[160px] p-1  border-b-[1px] border-gray-400  cursor-pointer"
                >
                  {city}
                </li>
              ))}
          </ul>
          <input
            className="h-[40px] border-none w-[65%] pl-4 text-black "
            type="text"
            placeholder="Enter Food or Resturant Name "
            onClick={(e) => loadRestaurantList({ restaurant: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        {restaurant.map((item) => (
          <div onClick={()=>router.push('explore/'+item.name+"?id="+item._id)} className="mt-4 border  border-balck bg-sky-500 h-auto w-[500px] ml-3 pb-3 p-2 rounded-lg ">
            <h3 className="text-center font-bold text-2xl">{item.name} </h3>
            <p className=" ">Contact:{item.phone} </p>

            <p>City:{item.city} </p>
            <p>
              Address:{item.address} 
            </p>
            <p>email: {item.email} </p>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
