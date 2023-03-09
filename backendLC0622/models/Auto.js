const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const autoSchema = new Schema({
  patente: {
    type: String,
    required: true,
    unique: true,
  },
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
    unique: true,
  },
  anio: {
    type: Number,
    required: true
  },
  color: {
    type: String
  }
});

const Auto = mongoose.model("Auto", autoSchema);

module.exports = Auto;