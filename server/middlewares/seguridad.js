const jwt = require("jsonwebtoken");
const ErrorResponse = require("../helpers/errorResponse");
const { getUserVerify } = require("../controllers/consultas");

exports.seguridad = async (req, res, next) => {
  let token;
  let JWT_SECRET = process.env.JWT_SECRET;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.slice(6).trim();
  }
  if (!token) {
    return next(new ErrorResponse("El cliente no tiene token", 400));
  }
  
  try {
    const { email } = jwt.verify(token, JWT_SECRET);
    const usuario = await getUserVerify(email);
    console.log("usuario:", usuario);
    req.usuario = usuario;
    next();
  } catch (err) {
    return next(
      new ErrorResponse("Errores en el token", 400)
    );
  }
};
