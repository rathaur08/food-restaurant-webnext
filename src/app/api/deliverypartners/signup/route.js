import { connectionStr } from "@/app/lib/db";
import { deliverypartnersSchema } from "@/app/lib/deliverypartnersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true })
  const user = new deliverypartnersSchema(payload);
  const result = await user.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}