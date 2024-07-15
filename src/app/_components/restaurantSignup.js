"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [c_Password, setC_Password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = async () => {
    if (password !== c_Password) {
      alert("Passwords do not match!");
      return;
    }


    try {
      let response = await fetch("/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, password, name, city, address }),
      });

      response = await response.json();
      if (response) {
        console.log(response.message == "User created successfully");
        const { user } = response;
        delete user.password;

        localStorage.setItem("restaurantUser", JSON.stringify(user));
        router.push("/restaurant/dashboard");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup. Please try again.");
    }
  };

  return (
    <>
      <h3 className="text-18 font-bold">User Signup Page</h3>
      <div>
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-600 w-[300px] h-[30px] p-4"
            type="text"
            placeholder="Enter your Contact Number"
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
          <input
            value={c_Password}
            onChange={(e) => setC_Password(e.target.value)}
            className="border border-gray-600 w-[300px] h-[30px] p-4"
            type="password"
            placeholder="Enter your Confirm Password"
          />
        </div>

        <div className="mt-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-600 w-[300px] h-[30px] p-4"
            type="text"
            placeholder="Enter restaurant name"
          />
        </div>

        <div className="mt-4">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-600 w-[300px] h-[30px] p-4"
            type="text"
            placeholder="Enter city"
          />
        </div>

        <div className="mt-4">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-600 w-[300px] h-[30px] p-4"
            type="text"
            placeholder="Enter your full address"
          />
        </div>

        <div className="mt-4">
          <button
            onClick={handleSignup}
            className="border border-black-600 w-[300px] h-[30px] bg-blue-600 font-medium text-white rounded-[5px]"
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
