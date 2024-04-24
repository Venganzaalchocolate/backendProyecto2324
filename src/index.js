//usamos express como freamwork
const express=require('express');
const mongoose=require("mongoose")
const userRoutes=require("./routes/userRoutes");
const gamesRoutes=require("./routes/gamesRoutes");
const orderRoutes=require("./routes/orderRoutes");
const resError = require('./utils/resError');
const { ClientError } = require('./utils/clientError');

// usamos dtenv para las variables de entorno 
require('dotenv').config()

const app=express();
// le asignamos una constante a las rutas de usuario

// donde escucha el servidor 
app.listen(4000);
//le ponemos un "prefijo" a las rutas
app.use('/api/games',gamesRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/user',userRoutes)
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