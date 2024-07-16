"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email) {
      toast.error("Please enter email ");
      return;
    }
    if (!password) {
      toast.error("Please enter password ");
      return;
    }

    try {
      let response = await fetch("/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, login: true }),
      });

      response = await response.json();
      if (response.success) {
        const { user } = response;
        localStorage.setItem("restaurantUser", JSON.stringify(user));
        router.push("/restaurant/dashboard");
        toast.success("Login successful");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Error during login. Please try again.");
    }
  };

  return (
    <>
      <h3 className="text-18 font-bold">User Login Page</h3>
      <ToastContainer />
      <div className="mt-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-600 w-[300px] h-[30px] p-4"
          type="email"
          placeholder="Enter your Email"
        />
      </div>

      <div className="mt-4">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-600 w-[300px] h-[30px] p-4"
          type="password"
          placeholder="Enter your Password"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handleLogin}
          className="border border-black-600 w-[300px] h-[30px] bg-green-600 font-medium text-white rounded-[5px]"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
