const { Schema, model } = require("mongoose");

const mascotaSchema = new Schema({
  numeroId: {
    type: Number,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
});

const Mascota = model("Mascota", mascotaSchema);

module.exports = Mascota;