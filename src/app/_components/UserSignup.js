"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    let response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, password, city, address }),
    });
    response = await response.json();
    if (response.success) {
      const result = response.result;
      delete result.password;
      localStorage.setItem("user", JSON.stringify(result));
      alert("signup successfully done");
      router.push('http://localhost:3000/');
    } else {
      alert(" failed ");
    }
  };

  return (
    <div>
      <h1>User signUp page</h1>
      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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
          placeholder="Enter your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter confirm Password"
          value={c_password}
          onChange={(e) => setC_Password(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <input
          className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handleSignUp}
          className="border border-black-600 w-[300px] p-2 bg-green-600 font-medium text-white rounded-[5px]"
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default UserSignup;
