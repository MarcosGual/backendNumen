const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productoSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
    unique: true,
  },
  marca: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  oferta: {
    type: Boolean,
    required: false,
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = { Producto };