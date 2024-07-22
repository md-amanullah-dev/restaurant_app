'use client'

import Link from "next/link";
import { MdDeliveryDining } from "react-icons/md";

const CustomerHeader = ()=>{
    return(
        <>

<div className="bg-gray-600 flex items-center">
      <MdDeliveryDining className="ml-5" size={60} />
      <ul className="flex items-center ml-5">
        <li className="font-bold text-white text-18">
          <Link href="/">Home</Link>
        </li>
        
        <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Login</Link>
          </li>
          
          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Signup</Link>
          </li>
          
          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Cart(0)</Link>
          </li>
          
          <li className="ml-5 font-bold text-white text-18">
            <Link href="/login">Add Restaurant</Link>
          </li>
      </ul>
    </div>
        </>
    )
}

export default CustomerHeader;