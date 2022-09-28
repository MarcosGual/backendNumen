const obtenerRecurso = (req, res, next) => {
  res.send("respond with a resource");
};

const obtenerUsuarios=(req, res)=>{
    res.json([
        {
            id:1,
            nombre: 'Pablo'
        },
        {
            id: 2,
            nombre: 'Verónica'
        },
        {
            id: 3,
            nombre: 'Alejandra'
        }
    ])
}

module.exports = { obtenerRecurso, obtenerUsuarios };
