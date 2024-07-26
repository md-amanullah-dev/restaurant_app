"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserLogin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const handleLogin = async () => {
    let response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    response = await response.json();

    if (response.success) {
      const result = response.result;
      delete result.password;
      localStorage.setItem("user", JSON.stringify(result));

      if(props?.redirect?.order){
        router.push("http://localhost:3000/order");

      }else{

        router.push("http://localhost:3000/");
      }
    } else {
      alert("Failed to login. Please try again with valid email and password ");
    }
  };
  return (
    <div>
      <h1 className="font-bold text-xl mt-2">User Login Page</h1>

      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <button
          className="border border-black-600 w-[300px] p-2 bg-green-600 font-medium text-white rounded-[5px]"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
