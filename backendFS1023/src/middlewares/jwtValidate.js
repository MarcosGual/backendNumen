const jwt = require('jsonwebtoken');

const jwtValidate = (req, res, next) => {
    const token = req.headers['authorization'];
    // const token = req.cookies.authToken;

    if(!token){
        res.status(403).json({message: 'Error: token no proporcionado.'})
    }else{
        jwt.verify(token, process.env.JWT_KEY, (error, decoded)=>{
            if(error){
                res.status(401).json({message: 'Error: token inválido. Acceso denegado.'})
            } else{
                req.user = decoded;
                next();
            }
        })
    }
}

module.exports = jwtValidate;