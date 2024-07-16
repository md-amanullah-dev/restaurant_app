"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";

const Header = () => {
  const [details, setDetails] = useState(null);
  const router = useRouter();
  const pathName = usePathname();
  

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName === "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName === "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, [pathName, router]);

  const handleLogout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  };

  return (
    <div className="bg-gray-600 flex items-center">
      <MdDeliveryDining className="ml-5" size={60} />
      <ul className="flex items-center ml-5">
        <li className="font-bold text-white text-18">
          <Link href="/">Home</Link>
        </li>

        {details ? (
          <>
            <li className="font-bold text-white text-18 ml-5">
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="font-bold text-white text-18 ml-5"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Login/Signup</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
