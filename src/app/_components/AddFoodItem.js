import { useState } from "react";

const AddFoodItem = () => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");


  const handleAddFood = ()=>{
    console.log(foodName,price,path,description)
  }
  return (
    <div className="text-center">
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
          className="border border-gray-600   rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food price"
        />
      </div>
      

      <div className="mt-2">
        <input
          value={path}
          onChange={(e) => setPath(e.target.value)}
          type="text"
          className="border border-gray-600  rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food image path"
        />
      </div>
      

      <div className="mt-2">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="border border-gray-600  rounded-sm w-[300px] h-[30px] p-4"
          placeholder="Enter food description"
        />
      </div>

      <div className="mt-2">
        <button className="bg-green-700 text-white font-bold text-xl  rounded-sm w-[300px] h-[40px] p-2"  onClick={handleAddFood}>Add Food</button>
      </div>
      

    </div>
  );
};

export default AddFoodItem;
