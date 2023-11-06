const express = require("express");
const {
  obtenerProductos,
  obtenerProductoPorId,
  cargarProducto,
  editarProducto,
  eliminarProducto,
} = require("../controllers/productoController");

const router = express.Router();

//middlewares requeridos
const { validarId } = require("../middlewares/validarId");
const { check } = require("express-validator");
const authenticateJWT = require("../middlewares/authToken");

/* GET users listing. */
router.get("/lista", authenticateJWT, obtenerProductos);
router.get("/id/:id([0-9a-fA-F]{24})", validarId, obtenerProductoPorId);

//Posts (crear recursos)
router.post(
  "/crear",
  [
    check("codigo")
      .not()
      .isEmpty()
      .withMessage("El código debe cargarse")
      .isNumeric()
      .withMessage("El código debe ser numérico"),
    check("marca").not().isEmpty().withMessage("La marca debe cargarse"),
    check("precio")
      .isNumeric()
      .withMessage("El precio debe ser de tipo número")
      .isLength({ min: 1, max: 5 })
      .withMessage("El precio ingresado debe ser de máximo 5 dígitos"),
  ],
  cargarProducto
);

//Put: actualización de producto
router.put(
  "/editar/:id([0-9a-fA-F]{24})",
  validarId,
  [
    check("codigo")
      .not()
      .isEmpty()
      .withMessage("El código debe cargarse")
      .isNumeric()
      .withMessage("El código debe ser numérico"),
    check("marca").not().isEmpty().withMessage("La marca debe cargarse"),
    check("precio")
      .isNumeric()
      .withMessage("El precio debe ser de tipo número")
      .isLength({ min: 1, max: 5 })
      .withMessage("El precio ingresado debe ser de máximo 5 dígitos"),
  ],
  editarProducto
);

//Delete: eliminar producto

router.delete('/eliminar/:id([0-9a-fA-F]{24})', validarId, eliminarProducto )

module.exports = router;
