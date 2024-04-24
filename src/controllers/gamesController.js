const {Games} = require('../models/indexModels');
const { esPassSegura, validName, validEmail, catchAsync, response, gestionErrores, ClientError, generarHashpass } = require('../utils/indexUtils')

const postCrearJuego = async (req, res) => {
    // doble comprobación, primero por seguridad en el frontend nos aseguraremos que los datos enviados sean correctos,
    // y aquí (backend) volveremos ha hacer una doble comprobación para evitar injección de código
    // TODO validar
    
    // Crear un nuevo juego utilizando el modelo de Mongoose

    const newGame=new Games({
        name: req.body.name,
        category: req.body.category,
        author: req.body.author,
        publisher: req.body.publisher,
        numberOfPlayers: req.body.numberOfPlayers,
        recommendedAge: req.body.recommendedAge, 
        duration: req.body.duration,
        description: req.body.description,

    })
    // Guardar el usuario en la base de datos
    const savedGame = await newGame.save();
    // Enviar el usuario guardado como respuesta
    response(res, 200, savedGame)
}

module.exports = {
    //gestiono los errores con catchAsync
    postCrearJuego:catchAsync(postCrearJuego),
}