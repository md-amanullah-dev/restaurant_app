"use client";

import { useState } from "react";
import Login from "../_components/restaurantLogin";
import Signup from "../_components/restaurantSignup";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <Header/>
    <div className="text-center">
      <h1 className="text-xl font-bold">Restaurant Login/Signup Page</h1>
      {login ? <Login /> : <Signup />}
      <button className=" border-0 bg-transparent text-red-500 m-3 text-[18px] "  onClick={() => setLogin(!login)}>
        {login
          ? "Do not have an account? Signup"
          : "Already have an account? Login"}
      </button>
      </div>
      <Footer/>
    </>
  );
};

export default Restaurant;
