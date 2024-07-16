import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";

import Food from "@/app/lib/models/foods";

// get food items list
export async function GET(request, response) {
  connectDB();

  let success = false;
  const id = response.params.id;
  console.log("id", id);
  const result = await Food.find({ resto_id: id });
  if (result) {
    success = true;
  }

  return NextResponse.json({
    success,
    message: "Get Food list successfully!",
    result,
  });
}

// delete food item
export async function DELETE(request) {
  await connectDB();

  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); // Extracting the id from the URL

  let success = false;
  let result = null;

  try {
    result = await Food.deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      success = true;
    }
  } catch (error) {
    console.log("Something went wrong!", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }

  return NextResponse.json({
    result,
    success,
    message: success ? "Food item deleted successfully!" : "Food item not found!",
  });
}

