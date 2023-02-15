const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Bienvenidos a la API con Express+Mongo</h1>");
});

router.get("/contador", (req, res) => {
  req.session.contador = req.session.contador ? ++req.session.contador : 1;

  res.send(
    `<h3>Express Session: has visitado esta página ${req.session.contador} veces...`
  );
});

router.get("/cerrar-sesion", (req, res) => {
  req.session.destroy();

  res.send("Sesión cerrada correctamente...");
});

router.get("/crearCookie", (req, res) => {
  const user = {
    username: "Marcos",
    email: "marcos@gmail.com",
  };

  try {
    res.cookie("usuarioLogueado", user, { maxAge: 60000 * 60 * 24 * 7 });

    res.status(200).json({ msg: "Cookie creada exitosamente..." });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error en la creación de la cookie - " + error.message });
  }
});

router.get('/verCookie', (req, res)=>{
    if(req.cookies.usuarioLogueado){
        res.status(200).json({msg: 'El usuario logueado es '+req.cookies.usuarioLogueado.username, email: req.cookies.usuarioLogueado.email})
    }else{
        res.status(404).json({msg: 'No existe usuario logueado'})
    }
})

router.get('/limpiarCookies', (req, res)=>{
    res.clearCookie('usuarioLogueado')

    res.status(200).json({msg: 'La cookie ha sido eliminada correctamente...'})
})

module.exports = router;
