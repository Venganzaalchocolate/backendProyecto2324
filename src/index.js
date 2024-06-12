//usamos express como freamwork
const express=require('express');
const mongoose=require("mongoose")
const cors = require('cors'); // Importa el paquete cors
const userRoutes=require("./routes/userRoutes");
const gamesRoutes=require("./routes/gamesRoutes");
const orderRoutes=require("./routes/orderRoutes");
const loginRoutes=require("./routes/loginRoutes");
const emailRoutes=require("./routes/emailRoutes");
const {resError} = require('./utils/indexUtils');
const { ClientError } = require('./utils/clientError');

const port = process.env.PORT || 10000;
// usamos dtenv para las variables de entorno 
require('dotenv').config()

const app=express();
// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());
// le asignamos una constante a las rutas de usuario

// donde escucha el servidor 
app.listen(port);

app.use(cors());
//le ponemos un "prefijo" a las rutas
app.use('/api',gamesRoutes)
app.use('/api',orderRoutes)
app.use('/api',userRoutes)
app.use('/api',loginRoutes)
app.use('/api',emailRoutes)
//le pasamos el manejador de errores en vez del suyo para no mostrar la ruta del error
app.use((err,req,res,next)=>{
  const statusCode=err.status || 500;
  const message=err.message || 'Error interno del servidor';
  resError(res,statusCode,message)
})

mongoose.connect(process.env.URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});