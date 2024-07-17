import connectDB from "@/app/lib/db";
import Food from "@/app/lib/models/foods";
import { NextResponse } from "next/server";

// get food item to update
export const GET = async (request, response) => {
  connectDB();
  const id = response.params.id;
  let success = false;
  const result = await Food.findOne({ _id: id });
  if (result) {
    success = true;
  }

  return NextResponse.json({ result, success });
};


// update food item 

export const PUT = async(request,response)=>{
    connectDB();
    const id = response.params.id;
    let success = false;
    let payload = await request.json();
    const result = await Food.findOneAndUpdate({_id:id},payload);
    if(result){
        success = true;
    }

    return  NextResponse.json({success,result})

}