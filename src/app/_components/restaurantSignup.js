const Signup = () => {
  return (
    <>
      <h3 className="text-18 font-bold">User Signup Page</h3>
      <div className=" ">
        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="text"
            placeholder="Enter your Email"
          />
        </div>

        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="number"
            placeholder="Enter your Contact Number"
          />
        </div>

        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="password"
            placeholder="Enter your Password"
          />
        </div>

        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="password"
            placeholder="Enter your Confirm Password"
          />
        </div>

        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="password"
            placeholder="Enter reataurant name"
          />
        </div>

        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="password"
            placeholder="Enter city"
          />
        </div>

        <div className="mt-4">
          <input
            className="border border-gary-600 w-[300px] h-[30px] p-4 "
            type="password"
            placeholder="Enter your full address"
          />
        </div>

        <div className="mt-4">
          <button className="border border-black-600 w-[300px] h-[30px] bg-blue-600 font-medium text-white rounded-[5px]">
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
