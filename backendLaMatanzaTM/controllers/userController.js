const db = {
  usuarios: [
    {
      id: 1,
      nombre: "Santiago",
    },
    {
      id: 2,
      nombre: "Julián",
    },
    {
      id: 3,
      nombre: "Antonella",
    },
  ],
};

const obtenerUsuarios = (req, res) => {
  res.status(200).json(db);
};

const obtenerUsuarioxId = (req, res) => {
  const id = Number(req.params.id);
  const usuario = db.usuarios.find((usu) => usu.id === id);
  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(404).json({ msj: "Usuario no encontrado" });
  }
};

const obtenerStatusUsuario = (req, res) => {
  const id = Number(req.params.id);
  const status = id % 2 === 0 ? "activo" : "inactivo";

  res.status(200).json({ userId: id, status: status });
};

module.exports = { obtenerUsuarios, obtenerStatusUsuario, obtenerUsuarioxId };
