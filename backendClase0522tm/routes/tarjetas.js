const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res)=>{
    res.send('Lista de tarjetas')
});


module.exports = router;