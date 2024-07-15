import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";
import User from "../../lib/models/user";

connectDB();
export async function GET() {
  return NextResponse.json({
    message: "api running successfully!",
  });
}

export async function POST(request) {


  try {
    await connectDB();

    const payload = await request.json();
    const newUser = new User(payload);
    await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        message: "Error creating user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
