import { connectionStr } from "@/app/lib/db";
import { deliverypartnersSchema } from "@/app/lib/deliverypartnersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  let city = content.params.city;
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true })
  // City Name Filter small = capital
  let filter = { db_city: { $regex: new RegExp(city, 'i') } }
  const result = await deliverypartnersSchema.find(filter)
  return NextResponse.json({ result, success: true });
}