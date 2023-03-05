const express = require("express");
const ruta = express.Router();
 const { seguridad } = require("../middlewares/seguridad");

 const {
   createUsers,
   getUsuarios,
   postLogin,
 } = require("../controllers/controllers");

 ruta.route("/login").post(postLogin);

 ruta.route("/usuarios").post(createUsers).get(seguridad, getUsuarios);

 ruta.route("/usuarios").post(createUsers).get(seguridad, getUsuarios);

module.exports = ruta;
