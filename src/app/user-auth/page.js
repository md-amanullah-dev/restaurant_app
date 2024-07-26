'use client'
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import UserLogin from "../_components/UserLogin";
import UserSignup from "../_components/UserSignup";

const page = (props) => {

  const [login, setLogin] = useState(true)
  return (
    <>
      <CustomerHeader />
      <div className="text-center">
      {
        login?<UserLogin redirect ={props.searchParams} />:<UserSignup redirect ={props.searchParams} />
      }
      
        <button className="text-blue-400 font-semibold" onClick={()=>setLogin(!login)}>
          {login?"Do not have an Account? Signup":"Already have an Account? Login"}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default page;
