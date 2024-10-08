import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const data = await restaurantSchema.find();
  // console.log(data);

  return NextResponse.json({ result: true });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const restaurant = new restaurantSchema(payload);
  const result = await restaurant.save();
  return NextResponse.json({ result, success: true });
}
