import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import { foodSchema } from "@/app/lib/foodsModel";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.id;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const details = await restaurantSchema.findOne({ _id: id });
  const fooditems = await foodSchema.find({ resto_id: id });
  return NextResponse.json({ success: true, details, fooditems });
}
