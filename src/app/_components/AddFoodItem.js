import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFoodItem = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFood = async () => {
    console.log(foodName, price, path, description);
    if (!foodName) {
        toast.error("Please enter food name ");
        return;
      }
      if (!price) {
        toast.error("Please enter price ");
        return;
      }
      if (!path) {
        toast.error("Please enter path ");
        return;
      }
      if (!description) {
        toast.error("Please enter description ");
        return;
      }

    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }

    const response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodname: foodName,
        price: Number(price), // Ensure price is a number
        img_path: path,
        description,
        resto_id,
      }),
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Food added successfully");
    } else {
      toast.error("Failed to add food item: " + data.message);
    }
  };

  return (
    <div className="text-center">
      <ToastContainer />
      <h1 className="text-xl font-bold">Add New Food Item</h1>

      <div className="mt-4">
        <input
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          type="text"
          className="border border-gray-600 rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food name"
        />
      </div>
      <div className="mt-2">
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className="border border-gray-600 rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food price"
        />
      </div>

      <div className="mt-2">
        <input
          value={path}
          onChange={(e) => setPath(e.target.value)}
          type="text"
          className="border border-gray-600 rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food image path"
        />
      </div>

      <div className="mt-2">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="border border-gray-600 rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food description"
        />
      </div>

      <div className="mt-2">
        <button
          className="bg-green-700 text-white font-bold text-xl rounded-sm w-[300px] h-[40px] p-2"
          onClick={handleAddFood}
        >
          Add Food
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
