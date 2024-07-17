import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState([]);
  const router = useRouter();


  const foodItemList = async () => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    const resto_id = restaurantData._id;
    let response = await fetch(
      `http://localhost:3000/api/restaurant/foods/${resto_id}`
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


  const deleteFoodItem = async (id)=>{
    let response = await fetch(`http://localhost:3000/api/restaurant/foods/${id}`,{
        method:"DELETE"
    }
    
    )
    response = await response.json();
    console.log("response",response)
    if(response.success){
        foodItemList()
        toast.success("Food Item deleted")
    }else{
        toast.error("Food Item not deleted")

    }
  }

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
            <td className="border-2 border-solid border-black p-2">S.No</td>
            <td className="border-2 border-solid border-black p-2">Name</td>
            <td className="border-2 border-solid border-black p-2">Price</td>
            <td className="border-2 border-solid border-black p-2">
              Description
            </td>
            <td className="border-2 border-solid border-black p-2">Image</td>
            <td className="border-2 border-solid border-black p-2">
              Operations
            </td>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item, key) => {
            return (
              <tr key={key}>
                <td className="border-2 border-solid border-black p-2">
                  {key + 1}{" "}
                </td>
                <td className="border-2 border-solid border-black p-2">
                  {item.foodname}
                </td>
                <td className="border-2 border-solid border-black p-2">
                  {item.price}
                </td>
                <td className="border-2 border-solid border-black p-2">
                  {item.description}
                </td>
                <td className="border-2 border-solid border-black p-2">
                  <img
                    className="w-24 h-18"
                    src={item.img_path}
                    alt="image path"
                  />
                </td>
                
                <td className="border-2 border-solid border-black p-4">
                  <button onClick={()=>deleteFoodItem(item._id)} className="w-16 bg-red-600 text-white font-semibold p-2 rounded-md">
                    Delete
                  </button>{" "}
                  <button onClick={()=>router.push(`/restaurant/dashboard/${item._id}`)} className=" w-16 bg-green-400 text-white font-semibold p-2 rounded-md">
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
