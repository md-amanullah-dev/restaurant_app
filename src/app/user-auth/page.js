'use client'
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import UserLogin from "../_components/UserLogin";
import UserSignup from "../_components/UserSignup";

const page = () => {

  const [login, setLogin] = useState(true)
  return (
    <>
      <CustomerHeader />
      <div className="text-center">
      {
        login?<UserLogin/>:<UserSignup />
      }
      
        
      </div>
      <Footer />
    </>
  );
};

export default page;
