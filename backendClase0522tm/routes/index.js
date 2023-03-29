var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Clase de Express' });
// });

router.get("/contador", function (req, res) {
  req.session.contador = req.session.contador ? ++req.session.contador : 1;

  res.send(
    `<h3>Express Session: Visitaste esta página ${req.session.contador} veces</h3>`
  );
});

router.get("/cerrarSesion", function (req, res) {
  req.session.destroy();

  res.send(`<h3>Sesión cerrada</h3>`);
});

router.get("/crearCookie", function (req, res) {
  const user = {
    username: "marcos",
    password: "marcos123",
    email: "marcos@gmail.com",
  };

  try {
    res.cookie("usuarioLogueado", user.username, { maxAge: 60000 * 60 * 24 });

    res.status(200).json({ msg: "Cookie creada exitosamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al crear la cookie" });
  }
});

router.get("/verCookie", function (req, res) {
  if(req.cookies.usuarioLogueado){
  res
    .status(200)
    .json({ msg: `El usuario logueado es: ${req.cookies.usuarioLogueado}` });
  }else{
    res
    .status(404)
    .json({ msg: `No hay usuario logueado` });
  }
});

router.get("/limpiarCookie", function (req, res) {
  res.clearCookie('usuarioLogueado')

  res
    .status(200)
    .json({ msg: `Se ha limpiado la cookie` });
});

module.exports = router;
