"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditFoodItem = (props) => {
  console.log("first", props);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleEditFood = async () => {
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

    const data = await response.json();
    if (data.success) {
      toast.success("Food Edit successfully");
      setAddItem(false);
    } else {
      toast.error("Failed to edit food item: " + data.message);
    }
  };

  const handleFoodList = async () => {
    let response = await fetch(
      `http://localhost:3000/api/restaurant/foods/edit/${props.params.id}`
    );
    response = await response.json();
    if (response.success) {
      console.log(response.result);
      setFoodName(response.result.foodname);
      setPrice(response.result.price);
      setPath(response.result.img_path);
      setDescription(response.result.description);
    }
  };

  useEffect(() => {
    handleFoodList();
  }, []);

  return (
    <div className="text-center">
      <ToastContainer />
      <h1 className="text-xl font-bold">Update Food Item</h1>

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
          onClick={handleEditFood}
        >
          Update Food
        </button>
      </div>

      <div className="mt-2">
        <button
          className="bg-green-700 text-white font-bold text-xl rounded-sm w-[300px] h-[40px] p-2"
          onClick={() => router.push(`/restaurant/dashboard/`)}
        >
          Back to Food List
        </button>
      </div>
    </div>
  );
};

export default EditFoodItem;
