"use client";
import { useEffect, useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [c_Password, setC_Password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = async () => {
    console.log(email, phone, password, name);

    let result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, phone, password, name, city, address }),
    });

    result = await result.json();
    console.log("result", result);
  };
  useEffect(() => {
    handleSignup();
  }, []);

  return (
    <>
      <h3 className="text-18 font-bold">User Signup Page</h3>
      <div className=" ">
        <div className="mt-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="email"
            placeholder="Enter your Email"
          />
        </div>

        <div className="mt-4">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="phone"
            placeholder="Enter your Contact Number"
          />
        </div>

        <div className="mt-4">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="password"
            placeholder="Enter your Password"
          />
        </div>

        <div className="mt-4">
          <input
            value={c_Password}
            onChange={(e) => setC_Password(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="text"
            placeholder="Enter your Confirm Password"
          />
        </div>

        <div className="mt-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="text"
            placeholder="Enter reataurant name"
          />
        </div>

        <div className="mt-4">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="text"
            placeholder="Enter city"
          />
        </div>

        <div className="mt-4">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
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
