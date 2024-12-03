const { default: mongoose } = require("mongoose");

const orderModal = new mongoose.Schema({
  order_user_id: mongoose.Schema.Types.ObjectId,
  order_food_items_id: String,
  order_resto_id: mongoose.Schema.Types.ObjectId,
  order_delivery_boy_id: mongoose.Schema.Types.ObjectId,
  order_status: String,
  order_total_amount: String,
  order_gen_date: { type: Date, default: Date.now },
});

export const orderSchema = mongoose.models.orders || mongoose.model("orders", orderModal);
