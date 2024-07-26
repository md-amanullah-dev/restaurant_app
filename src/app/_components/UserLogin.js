
'use client'
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <h1 className="font-bold text-xl mt-2">User Login Page</h1>

      <div className="mt-4">
        <input className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4">
      <input className="border border-gray-600 rounded-md w-[300px] h-[30px] p-4"
          type="text"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <button className="border border-black-600 w-[300px] p-2 bg-green-600 font-medium text-white rounded-[5px]">Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
