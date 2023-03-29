const db = require("../models/index");

module.exports = {
  postCurso: async (req, res) => {
    try {
      const curso = await db.models.Curso.create({ nombre: "curso mañana 0322" });

      res
        .status(201)
        .json({
          cursoCreado: curso.id,
          status: "ok",
          message: "curso creado exitosamente",
        });
    } catch (error) {
      res
        .status(500)
        .json({ cursoCreado: null, status: "error", message: error.message });
    }
  },
  getCursos: async(req, res)=>{
    try {
        const cursos = await db.models.Curso.findAll();
  
        res
          .status(200)
          .json({
            cursos: cursos,
            status: "ok",
            message: "lista de cursos",
          });
      } catch (error) {
        res
          .status(500)
          .json({ cursoCreado: null, status: "error", message: error.message });
      }
  }
};
