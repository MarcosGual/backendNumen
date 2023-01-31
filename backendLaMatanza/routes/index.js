var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: `Express` });
});

router.get("/contador", function (req, res, next) {
  req.session.counter = req.session.counter ? req.session.counter + 1 : 1;

  res.send(
    `<h3>Express - Visitaste esta página ${req.session.counter} veces!</h3>`
  );
});

module.exports = router;
