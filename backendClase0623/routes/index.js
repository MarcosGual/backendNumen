const express = require("express");
const router = express.Router();

const sessionController = require("../controllers/session.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/views", sessionController.getSessionViews);
router.get("/createSession", sessionController.createUserSession);
router.get("/viewSession", sessionController.getUserSession);
router.get("/viewCookie", sessionController.getUserCookie);
router.get('/closeSession', sessionController.closeSession);
router.get('/deleteCookie', sessionController.deleteCookie);

module.exports = router;
