import connectDB from "@/app/lib/db"
import User from "@/app/lib/models/user";
import { NextResponse } from "next/server"

connectDB();

export const  GET = async (request,response)=>{
    connectDB;
    let result = await User.find();
    result = result.map((item)=>item.city.charAt(0).toUpperCase()+item.city.slice(1));
    result  = [...new Set(result.map((item)=>item))]

    return NextResponse.json({
        success:true,
        result:result,
        message:"Get location data "
    })
}