const { Gato } = require("../models/gato");
const { validationResult } = require("express-validator");

const obtenerGatos = async (req, res) => {
  const gatos = await Gato.find();
  res.status(200).json({ gatos });
};

const obtenerGato = async (req, res) => {
  const gato = await Gato.findById(req.params.id);
  res.status(200).json({ gato });
};

const buscarGato = async (req, res) => {
  console.log(req.params.nombre);
  const gato = await Gato.findOne({ nombre: req.params.nombre });
  res.status(200).json({ gato });
};

const buscarGatoPorQuery = async (req, res) => {
  const gato = await Gato.findOne({ nombre: req.query.nombre });
  res.status(200).json({ gato });
};

const agregarGato = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const gato = new Gato(req.body);
      await gato.save();
      res.status(201).json({ gato });
    } else {
      res.status(501).json({ msj: error });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  obtenerGatos,
  obtenerGato,
  agregarGato,
  buscarGato,
  buscarGatoPorQuery,
};
