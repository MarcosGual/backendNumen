const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

let rolesValidos = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} no es un role válido",
};

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
    required: [true],
    enum: rolesValidos,
  },
});

// elimina la key password del objeto que retorna al momento de crear un usuario
userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.plugin(uniqueValidator, {
  message: "{PATH} debe de ser único",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
