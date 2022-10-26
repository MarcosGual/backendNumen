const crearSesion = async (req, res) => {
  let usuario = {
    name: "marcos",
    email: "marcos@gmail.com",
    pass: "1234",
    country: "Argentina",
  };

  console.log(usuario)

  res.cookie("personaEnSesion", usuario.country, { maxAge: 60000 });

  req.session.user = usuario;

  res.json(req.session.user);
};

const verCookie=(req, res)=>{
    res.json({valor: req.cookies.personaEnSesion});
}

const eliminarCookie=(req, res)=>{
    res.clearCookie("personaEnSesion");
    res.json({msg: "La cookie ha sido eliminada exitosamente"})
}

module.exports = { crearSesion, verCookie, eliminarCookie };
