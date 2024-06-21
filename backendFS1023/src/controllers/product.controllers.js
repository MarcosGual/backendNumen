const { default: axios } = require("axios");
const { Product } = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "Ok", products: products });
  } catch (error) {
    console.log("Error al obtener productos - " + error.message);
    res.status(500).json({ message: "Error al obtener productos." });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res
        .status(404)
        .json({ message: "No se ha encontrado el producto con ese id." });
    } else {
      res.status(200).json({ message: "Ok", product: product });
    }
  } catch (error) {
    console.log("Error al obtener producto - " + error.message);
    res.status(500).json({ message: "Error al obtener producto." });
  }
};

exports.createProduct = async (req, res) => {
  try {
    // const newProduct = await Product.create(req.body);

    const { data } = await axios.get("https://dolarapi.com/v1/dolares/blue");
    const newProduct = { ...req.body, usdPrice: req.body.price / data.venta };

    await Product.create(newProduct);

    res.status(201).json({ message: "Ok", product: newProduct });
  } catch (error) {
    console.log("Error al crear producto - " + error.message);
    res.status(500).json({ message: "Error al crear el producto." });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Ok", product });
  } catch (error) {
    console.log("Error al crear producto - " + error.message);
    res.status(500).json({ message: "Error al crear el producto." });
  }
};

//faltan actualizar y borrar!
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ok", product });
  } catch (error) {
    console.log("Error al crear producto - " + error.message);
    res.status(500).json({ message: "Error al crear el producto." });
  }
};

exports.unsuscribeProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      isActive: false,
    });
    if (!product)
      return res.status(404).json({ message: "Producto no encontrado." });
    res.status(200).json({ message: "Ok", product });
  } catch (error) {
    console.log("Error al crear producto - " + error.message);
    res.status(500).json({ message: "Error al crear el producto." });
  }
};
