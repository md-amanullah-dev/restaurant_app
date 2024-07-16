import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";

import Food from "@/app/lib/models/foods";

export async function GET(request, response) {
  connectDB();

  let success = false;
  const id = response.params.id;
  console.log("id", id);
  const result = await Food.find({resto_id:id});
  if (result) {
    success = true;
  }

  return NextResponse.json({
    success,
    message: "Get Food list successfully!",
    result,
  });
}
