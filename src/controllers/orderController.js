const {Order, ListaJuegos, Games} = require('../models/indexModels');
const {  prevenirInyeccionCodigo, catchAsync, response, gestionErrores, ClientError, generarHashpass, calcularPrecio } = require('../utils/indexUtils');
const mongoose = require('mongoose');
// crear usuario
const postCrearOrder = async (req, res) => {
    const listaJuegosBody=req.body.listaJuegos
    const newOrder=new Order({
        userId: prevenirInyeccionCodigo(req.body.userId),
        listaJuegos: listaJuegosBody,
        date: new Date(),
        address: req.body.address,
        state:'Pagado',
        totalPrice: req.body.totalPrice,
        })
        const session = await mongoose.startSession();
        session.startTransaction();
    
        try {
            // Iterar sobre cada juego en la lista para actualizar el stock
            for (const x of listaJuegosBody) {
                const updatedGame = await Games.findOneAndUpdate(
                    { _id: x.gameId },
                    { $inc: { stock: -x.quantity } },
                    { new: true, runValidators: true, session }
                );
    
                if (!updatedGame) {
                    throw new ClientError(`Juego con ID ${x.gameId} no encontrado`, 404);
                }
    
                if (updatedGame.stock < 0) {
                    throw new ClientError(`No hay suficiente stock para el juego ${updatedGame.name}`, 403);
                }
            }
    
            // Guardar el pedido en la base de datos
            const savedOrder = await newOrder.save({ session });
    
            // Confirmar la transacción
            await session.commitTransaction();
            session.endSession();

            // Enviar el pedido guardado como respuesta
            response(res, 200, savedOrder)
        } catch (error) {
            // Abortar la transacción en caso de error
            await session.abortTransaction();
            session.endSession();
            throw new ClientError(`No se ha podido realizar el pedido: ${error}`, 500)
        }
    // Enviar el usuario guardado como respuesta
    
}
//recoge todos los usuarios
const getOrder= async (req,res)=>{
    const id = req.body.id;
    // Utiliza el método find() de Mongoose para obtener todos los documentos en la colección
    const orders = await Order.find({userId:id});
    // Responde con la lista de pedidos y código de estado 200 (OK)
    response(res, 200, orders);
}

//busca un pedido por ID
const getOrderID= async (req,res)=>{
    // Obtén el ID del parámetro de la solicitud
    const id = req.params.id;
    // Utiliza el método findById() de Mongoose para buscar un pedido por su ID
    // Si no se encuentra el pedido, responde con un código de estado 404 (Not Found)
    const order = await Order.findById(id).catch(error => {throw new ClientError('Pedido no encontrado', 404)});
    // Responde con el pedido encontrado y código de estado 200 (OK)
    response(res, 200, order);
}

// borrar un pedido
const orderDeleteId=async (req, res)=>{
    const id = req.params.id;
    const orderDelete = await Order.deleteOne({_id:id});
    response(res, 200, orderDelete);
}


module.exports = {
    //gestiono los errores con catchAsync
    postCrearOrder:catchAsync(postCrearOrder),
    getOrder:catchAsync(getOrder),
    getOrderID:catchAsync(getOrderID),
    orderDeleteId:catchAsync(orderDeleteId),
}
