const express = require('express');
const router = express.Router();

router.get('/suma/:num1/:num2', (req, res)=>{
    const suma = Number(req.params.num1) + Number(req.params.num2);

    res.status(200).json({suma: suma});
})

module.exports = router;