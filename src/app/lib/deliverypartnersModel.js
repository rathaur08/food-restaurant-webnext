const { default: mongoose } = require("mongoose");

const deliveryPartnersModal = new mongoose.Schema({
  // db => delivery_boy
  db_fullname: String,
  db_email: String,
  db_number: Number,
  db_city: String,
  db_full_address: String,
  db_password: String,
  db_gen_date: { type: Date, default: Date.now },
});

export const deliverypartnersSchema = mongoose.models.deliverypartners || mongoose.model("deliverypartners", deliveryPartnersModal);
