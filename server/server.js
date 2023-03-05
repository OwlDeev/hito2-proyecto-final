const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const errorHandler = require('./middlewares/error')
const dotenv = require("dotenv");
const rutas = require("./routes/routes");

const app = express()
dotenv.config({ path: ".server/config/config.env" });


app.use(express.json());
app.use(morgan('dev'))
app.use(cors());
app.use(errorHandler);

app.use("/", rutas);

app.use('*', function(req, res) {
    res.send("Error. Intente nuevamente con otra ruta.");
});

const PORT = process.env.portServer;
app.listen(PORT, console.log(`el servidor esta activo en el puerto ${PORT}`));