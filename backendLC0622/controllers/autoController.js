const Auto = require("../models/Auto");

module.exports = {
    //READ R
  getAutos: async (req, res) => {
    const autos = await Auto.find();

    res.status(200).json({ listaAutos: autos, msg: "Ok" });
  },

  //CREATE C
  postAuto: async (req, res) => {
    try {
        const auto = new Auto(req.body);
        await auto.save();

        res.status(201).json({
          auto: auto,
          msg: "El auto ha sido registrado exitosamente",
        });
      } catch (error) {
      res.status(500).json({
        user: null,
        msg: "Hubo un error al crear el registro del auto - " + error.message,
      });
    }
  },
};
