import connectDB from "@/app/lib/db";
import { orderUser } from "@/app/lib/models/user";

const { NextResponse } = require("next/server");

export const GET = async (request, response) => {
  return NextResponse.json({
    success: false,
    message: "User Login Successfully!",
  });
};

export const POST = async (request, response) => {
  const payload = await request.json();

  let success = false;

  connectDB();
  const result = await orderUser.findOne({
    email: payload.email,
    password: payload.password,
  });

  if (result) {
    success = true;
  }

  return NextResponse.json({
    success,
    result,
    message: "User login Successfully!",
  });
};
