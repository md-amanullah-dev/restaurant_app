import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img_path: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  resto_id: mongoose.Schema.ObjectId,
});

const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default Food;
