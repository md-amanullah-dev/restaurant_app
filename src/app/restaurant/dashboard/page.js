"use client";

import AddFoodItem from "@/app/_components/AddFoodItem";
import FoodItemList from "@/app/_components/FoodItemList";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { useState } from "react";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <>
      <Header />


      <button onClick={()=>setAddItem(true)}>Add Item</button>
      <button onClick={()=>setAddItem(false)}>Dashboard</button>
      {addItem ? <AddFoodItem setAddItem = {setAddItem} /> : <FoodItemList/>}

      <Footer />
    </>
  );
};

export default Dashboard;
