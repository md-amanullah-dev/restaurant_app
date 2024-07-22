import connectDB from "@/app/lib/db";
import Food from "@/app/lib/models/foods";
import User from "@/app/lib/models/user";

const { NextResponse } = require("next/server");

export const GET = async (request, response) => {
  const id = response.params.id;
  connectDB();

  const result = await User.findOne({ _id: id });
  const foodItem = await Food.findOne({ resto_id: id });
  return NextResponse.json({
    success: true,
    result,
    foodItem,
    message: "Get Restaurant details",
  });
};
