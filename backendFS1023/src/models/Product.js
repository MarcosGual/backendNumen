const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    usdPrice: { type: Number },
    stock: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

exports.Product = model("Product", ProductSchema);
