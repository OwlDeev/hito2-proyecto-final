const { pool } = require('../config/dataBase.js')
const bcrypt = require('bcryptjs')

exports.createUser = async ({email, password, rol, lenguage}) => {
  try {
    const passwordEncriptada = bcrypt.hashSync(password)
    const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
    const valores = [email, passwordEncriptada, rol, lenguage];
    const resultado = await pool.query(consulta, valores);
    return resultado;
  } catch (error) {
    throw error;
  }
}

exports.getUserVerify = async (email) => {
  try {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const { rows } = await pool.query(consulta, values);
    console.log("rows: ", rows);
    return rows;
  } catch (error) {
    console.log("No se pudo llevar a cabo la consulta", error);
    return error;
  }
};

exports.verifyUser = async ( email, password ) => {
  try {

    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const validateQuery = await pool.query(consulta, values);
    if (validateQuery == []) {
      throw {
        code: 404,
        message: "No se encontró ningún usuario con estas credenciales",
      };
    }
    const result = bcrypt.compareSync(password, validateQuery.rows[0].password);
    
    return result;

  } catch (error) {
    throw error;
  }
}
