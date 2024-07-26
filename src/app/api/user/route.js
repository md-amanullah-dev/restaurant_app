import { orderUser } from "@/app/lib/models/user";
import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";

connectDB();
export async function GET() {
  return NextResponse.json({
    message: "api running successfully!",
  });
}

export const POST = async (request) => {
  try {
    await connectDB();
    const payload = await request.json();

    const customer = new orderUser(payload);
    const result = await customer.save();

    return NextResponse.json({
      success: !!result,
      result,
      message: "User signup successfully!",
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({
      success: false,
      message: `Error occurred: ${error.message}`,
    });
  }
};
