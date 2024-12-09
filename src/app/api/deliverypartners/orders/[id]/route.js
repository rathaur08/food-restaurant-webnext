import { connectionStr } from "@/app/lib/db";
import { orderSchema } from "@/app/lib/ordersModel";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.id;
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await orderSchema.find({ order_delivery_boy_id: id })
  if (result) {
    let restoData = await Promise.all(
      result.map(async (item) => {
        let restoInfo = {};
        restoInfo.data = await restaurantSchema.findOne({ _id: item.order_resto_id })
        restoInfo.order_total_amount = item.order_total_amount;
        restoInfo.order_status = item.order_status;
        return restoInfo;
      })
    )
    result = restoData;
    success = true;
  }
  return NextResponse.json({ result, success });
}