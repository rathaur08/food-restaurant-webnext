import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/usersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const result = await userSchema.findOne({ user_email: payload.user_email, user_password: payload.user_password, });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
