const logTimeStamp = (req, res, next) => {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}] Solicitud entrante: ${req.method} ${req.originalUrl}`)

    next();
}

module.exports = logTimeStamp;