import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request) {
  // Get Fatch Req Data URL function
  const url = new URL(request.url); // Create a URL instance
  const queryParams = url.searchParams; // Access searchParams
  // console.log(queryParams.get("location"));
  // console.log(queryParams.get("restaurant"));

  let filter = {};
  if (queryParams.get("location")) {
    let city = queryParams.get("location")
    // create regx to city name check lower, upper case
    filter = { city: { $regex: new RegExp(city, 'i') } }
  } else if (queryParams.get("restaurant")) {
    let res_name = queryParams.get("restaurant")
    // create regx to restaurant name check lower, upper case
    filter = { res_name: { $regex: new RegExp(res_name, 'i') } }
  }
  await mongoose.connect(connectionStr, { useNewURLParser: true })
  let result = await restaurantSchema.find(filter);

  return NextResponse.json({ result, success: true })

}
