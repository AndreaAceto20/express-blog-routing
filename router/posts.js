const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
    res.send("lista post");
});

router.get("/:id", function (req, res) {
    res.send("questo è il post numero " + req.params.id);
});

router.post("/", function (req, res) {
    res.send("creazione nuovo post");
});

router.put("/:id", function (req, res) {
    res.send("modifica completa del post numero " + req.params.id);
});

router.patch("/:id", function (req, res) {
    res.send("modifica parziale del post numero " + req.params.id);
});

router.delete("/:id", function (req, res) {
    res.send("eliminazione del post numero " + req.params.id);
});

module.exports = router;