const { default: mongoose } = require("mongoose");

const foodModel = new mongoose.Schema({
  item_name: String,
  item_price: Number,
  item_path: String,
  item_description: String,
  resto_id: mongoose.Schema.Types.ObjectId,
  item_gen_date: { type: Date, default: Date.now }  // Automatically sets the current date
});

export const foodSchema = mongoose.models.foods || mongoose.model("foods", foodModel)