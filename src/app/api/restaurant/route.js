import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";
import User from "../../lib/models/user";
import bcrypt from "bcryptjs";

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

    let result;
    let success = false;
    let message = "";

    if (payload.login) {
      // Login for user
      result = await User.findOne({ email: payload.email });
      if (result && bcrypt.compareSync(payload.password, result.password)) {
        success = true;
        message = "Login successful";
      } else {
        message = "Invalid email or password";
      }
    } else {
      // Signup for user
      const hashedPassword = bcrypt.hashSync(payload.password, 10);
      const newUser = new User({ ...payload, password: hashedPassword });
      result = await newUser.save();
      if (result) {
        success = true;
        message = "User created successfully";
      }
    }

    return NextResponse.json({
      success,
      message,
      user: success ? { ...result._doc, password: undefined } : null,
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
