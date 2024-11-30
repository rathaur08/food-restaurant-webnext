const { default: mongoose } = require("mongoose");

const userModal = new mongoose.Schema({
  user_fullname: String,
  user_email: String,
  user_number: Number,
  user_city: String,
  user_full_address: String,
  user_password: String,
  user_gen_date: { type: Date, default: Date.now },
});

export const userSchema = mongoose.models.users || mongoose.model("users", userModal);
