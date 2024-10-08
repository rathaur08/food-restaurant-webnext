const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
  email: String,
  password: String,
  res_name: String,
  city: String,
  full_address: String,
  number: Number,
});

export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
