import Link from "next/link";
// import Logo from "../assest/Profile_img.jpg";
import { MdDeliveryDining } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-600 flex">
      {/* <img className="w-18 h-18 rounded-full" src={Logo} alt="" /> */}
      <MdDeliveryDining className="ml-5" size={60} />
      <ul className="flex items-center ml-5">
        <li className="font-bold text-white text-18">
          <Link href="/">Home </Link>
        </li>


        <li className="font-bold text-white text-18 ml-5" >
          <Link href="/">Profile </Link>
        </li>
        
        <li className="ml-[1000px] text-18 text-white font-bold ">
          <Link href="/">Login/Signup </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
