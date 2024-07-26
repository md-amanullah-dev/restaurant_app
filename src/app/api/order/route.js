import connectDB from "@/app/lib/db";
import { order } from "@/app/lib/models/order";
import { NextResponse } from "next/server"

export const GET = async()=>{
    return NextResponse.json({
        success:true,
        message:"test api running "
    })
};


export const POST = async(request, response)=>{
    const payload = await request.json();
    let success = true;
    connectDB();

    const orderObj = new order(payload);
    const result = await orderObj.save();
    if(result){
        success = true;
    }

    return NextResponse.json({
        success,
        result,
        message:"Place Order Successfully!"

    })


}