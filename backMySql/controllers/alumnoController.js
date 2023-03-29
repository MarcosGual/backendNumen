const db = require("../models/index");

module.exports = {
  postAlumno: async (req, res) => {
    try {
      const alumno = await db.models.Alumno.create({ dni: 33333335,nombre: "alumno mañana 0322", CursoId: 1 });

      res
        .status(201)
        .json({
          alumnoCreado: alumno.id,
          status: "ok",
          message: "alumno creado exitosamente",
        });
    } catch (error) {
      res
        .status(500)
        .json({ alumnoCreado: null, status: "error", message: error.message });
    }
  },
  getAlumnos: async(req, res)=>{
    try {
        const alumnos = await db.models.Alumno.findAll({include: db.models.Curso});
  
        res
          .status(200)
          .json({
            alumnos: alumnos,
            status: "ok",
            message: "lista de alumnos",
          });
      } catch (error) {
        res
          .status(500)
          .json({ cursoCreado: null, status: "error", message: error.message });
      }
  }
};