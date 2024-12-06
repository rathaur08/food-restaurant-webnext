import { connectionStr } from "@/app/lib/db";
import { deliverypartnersSchema } from "@/app/lib/deliverypartnersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const result = await deliverypartnersSchema.findOne({ db_number: payload.db_number, db_password: payload.db_password, });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
