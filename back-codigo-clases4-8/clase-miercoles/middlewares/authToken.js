const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateJWT = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token === null) return res.status(401).json({msg: 'JWT inválido o inexistente'})

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user)=>{
        console.log(err);

        if(err) return res.status(403).json({msg: 'JWT inválido. Autorización rechazada'})

        req.user = user;

        next();
    })
}

module.exports = authenticateJWT;