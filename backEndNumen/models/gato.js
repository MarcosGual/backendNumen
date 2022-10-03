const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  raza: {
    type: String,
    require: false,
  },
  edad: {
    type: Number,
    require: true,
  },
});

const Gato = mongoose.model("Gato", schema);

module.exports = { Gato };