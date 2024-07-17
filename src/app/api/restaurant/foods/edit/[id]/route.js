import Food from "@/app/lib/models/foods";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request,response)=>{
connect();
    const id  = response.params.id;

    let success = false;

    const result = await Food.findOne({_id:id});
    if(result){
        success = true

    }

    return NextResponse.json({result,success})

}