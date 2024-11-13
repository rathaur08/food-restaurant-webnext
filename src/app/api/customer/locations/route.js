import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, { useNewUrlParser: true })
  // Get restaurantSchema Data
  let success = false;
  let result = await restaurantSchema.find();
  // Add Filter => Find City => City First Name charAt(0) toUpperCase => AND Remove City First Name charAT(0)
  result = result.map((item) => item.city.charAt(0).toUpperCase() + item.city.slice(1));
  // Add Filter => Find only One Same City AND Remove Duplicate values from result City array
  result = [...new Set(result.map((item) => item))];
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
