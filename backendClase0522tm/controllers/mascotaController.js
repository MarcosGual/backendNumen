const Mascota = require("../models/Mascota");

const obtenerMascotas = async (req, res) => {
  const mascotas = await Mascota.find();
  res.status(200).json(mascotas);
};

const obtenerMascotaPorId = async (req, res) => {
  const mascota = await Mascota.findById(req.params.id);

  res.status(200).json({ mascota, msg: "Ok" });
};

const crearMascota = async (req, res) => {
  try {
    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();

    res.status(201).json({ nuevaMascota, msg: "Mascota creada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error al crear la mascota - " + error.message });
  }
};

module.exports = { obtenerMascotas, obtenerMascotaPorId, crearMascota };
