const mongoose = require("mongoose");
const Schema = mongoose.Schema; //clase "esquema" de mongoose (le da forma al modelo)

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

//clase que sirve para trabajar con el modelo Task (tarea)
const User = mongoose.model("User", userSchema);

module.exports = User;
