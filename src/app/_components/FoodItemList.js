import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);

  const foodItemList = async () => {
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/669616cf03f2b20d4e85606b"
    );
    response = await response.json();
    console.log(response);
    if (response.success) {
      setFoodItems(response.result);
      toast.success("Food items list")
    } else {
      toast.error("Empty food items");
    }
  };

  useEffect(() => {
    foodItemList();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl mb-4">Food Item List</h1>
      <ToastContainer/>
      <table className="border-2 border-solid border-black border-collapse ">
        <thead>
          <tr>
            <td className="border-2 border-solid border-black  p-4">S.No</td>
            <td className="border-2 border-solid border-black p-4">Name</td>
            <td className="border-2 border-solid border-black p-4">Price</td>
            <td className="border-2 border-solid border-black p-4">Image</td>
            <td className="border-2 border-solid border-black p-4">
              Description
            </td>
            <td className="border-2 border-solid border-black p-4">
              Operations
            </td>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, key) => {
            return (
              <tr key={key}>
                <td className="border-2 border-solid border-black p-4">
                  {key + 1}{" "}
                </td>
                <td className="border-2 border-solid border-black p-4">
                  {item.foodname}
                </td>
                <td className="border-2 border-solid border-black p-4">
                  {item.price}
                </td>
                <td className="border-2 border-solid border-black p-4">
                  <img
                    className="w-24 h-18"
                    src={item.img_path}
                    alt="image path"
                  />
                </td>
                <td className="border-2 border-solid border-black p-4">
                  {item.description}
                </td>
                <td className="border-2 border-solid border-black p-4">
                  <button className="w-16 bg-red-600 text-white font-semibold p-2 rounded-md">
                    Delete
                  </button>{" "}
                  <button className=" w-16 bg-green-400 text-white font-semibold p-2 rounded-md">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
