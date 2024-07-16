import connectDB from "@/app/lib/db";
import Food from "@/app/lib/models/foods";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  await connectDB();

  try {
    const { foodname, price, img_path, description, resto_id } =
      await req.json();
    const newFood = new Food({
      foodname,
      price,
      img_path,
      description,
      resto_id,
    });
    await newFood.save();
    return NextResponse.json({
      success: true,
      message: "Food item created successfully",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
