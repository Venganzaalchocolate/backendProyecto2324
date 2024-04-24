const {Order} = require('../models/indexModels');
const { esPassSegura, validName, validEmail, catchAsync, response, gestionErrores, ClientError, generarHashpass } = require('../utils/indexUtils');

// crear usuario
const postCrearOrder = async (req, res) => {
    // doble comprobación, primero por seguridad en el frontend nos aseguraremos que los datos enviados sean correctos,
    // y aquí (backend) volveremos ha hacer una doble comprobación para evitar injección de código
    // TODO COMPROBACIÓN DE DATOS CORRECTOS
    const newOrder=new Order({
        userId: req.body.userId,
        gameId: req.body.gameId,
        date: req.body.date,
        quantity: req.body.quantity,
        totalPrice: req.body.totalPrice,
        })
    // Guardar el pedido en la base de datos
    const savedOrder = await newOrder.save();
    // Enviar el usuario guardado como respuesta
    response(res, 200, savedOrder)
}

//recoge todos los usuarios
const getOrder= async (req,res)=>{
    // Utiliza el método find() de Mongoose para obtener todos los documentos en la colección
    const orders = await Order.find();
    // Responde con la lista de pedidos y código de estado 200 (OK)
    response(res, 200, orders);
}

//busca un pedido por ID
const getOrderID= async (req,res)=>{
    // Obtén el ID del parámetro de la solicitud
    const id = req.params.id;
    // Utiliza el método findById() de Mongoose para buscar un usuario por su ID
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