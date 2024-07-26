import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user_Id: mongoose.Schema.Types.ObjectId,
  foodItemIds: String,
  resto_id: mongoose.Schema.Types.ObjectId,
  deliveryBoy_Id: mongoose.Schema.Types.ObjectId,
  status: String,
  amount: String,
});
export const order =
  mongoose.model.orders || mongoose.model("orders", orderSchema);
