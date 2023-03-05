const { createUser, verifyUser } = require("./consultas");
const ErrorResponse = require("../helpers/errorResponse");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });
const jwt = require("jsonwebtoken");

exports.createUsers = async (req, res, next) => {
  try {
    try {
      const { email, password, rol, lenguage } = req.body;
      if (![email, password].includes("")) {
        const usuario = {
          email,
          password,
          rol,
          lenguage,
        };
        await createUser(usuario);
      } else {
        return res.send("El campo Email o Password deben estas ingresados");
      }
      return res.send("Usuario creado con éxito");
    } catch (err) {
      next(
        new ErrorResponse("Error, no ha sido posible crear usuario" + err + 404)
      );
    }
  } catch (error) {}
};

exports.postLogin = async (req, res, next) => {
  let SECRET = process.env.JWT_SECRET;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse("Debe tener un email y un password", 400));
    }
    const verifyUserResult = await verifyUser(email, password);
    if (!verifyUserResult) {
      return next(new ErrorResponse("Email o Password incorrecto", 400));
    }
    const token = jwt.sign({ email }, SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.send(token);
  } catch (error) {
    next(
      new ErrorResponse("Error" + error + 404)
    );
  }
};

exports.getUsuarios = async (req, res, next) => {
  try {
    return res.json(req.usuario);
  } catch (err) {
    next(
      new ErrorResponse(
        "Error, no ha sido posible obtener el usuario" + err + 404
      )
    );
  }
};
