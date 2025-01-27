import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: String,
    require: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  imgUrl: {
    type: String,
  },
  category: {
    type: [String],
  },
});

export default mongoose.model("Product", productSchema);
