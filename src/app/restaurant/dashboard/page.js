"use client";

import AddFoodItem from "@/app/_components/AddFoodItem";
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
      {addItem ? <AddFoodItem /> : <h1>Welcome to Dashboard page</h1>}

      <Footer />
    </>
  );
};

export default Dashboard;
