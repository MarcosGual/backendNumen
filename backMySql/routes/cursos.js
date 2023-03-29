const express = require("express");
const alumnoController = require("../controllers/alumnoController");
const router = express.Router();
const cursoController = require("../controllers/cursoController");

/* GET users listing. */
router.get("/", cursoController.getCursos);
router.post("/", cursoController.postCurso);

router.post('/alumnos', alumnoController.postAlumno);
router.get('/alumnos', alumnoController.getAlumnos)

module.exports = router;
