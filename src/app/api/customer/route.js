import connectDB from "@/app/lib/db";
import Food from "@/app/lib/models/foods";
import User from "@/app/lib/models/user";

const { NextResponse } = require("next/server");

export const GET = async (request, response) => {
  const url = new URL(request.url);
  const location = url.searchParams.get("location");

  let filter = {};
  if (location) {
    let city = url.searchParams.get("location");
    filter = { city: { $regex: new RegExp(city, "i") } };
  } else if (url.searchParams.get("restaurant")) {
    let name = url.searchParams.get("restaurant");
    filter = { name: { $regex: new RegExp(name, "i") } };
  }

  connectDB();
  let result = await User.find(filter);

  return NextResponse.json({
    success: true,
    result,
    message: "food list fetch",
  });
};
