const {Games} = require('../models/indexModels');
const { validDataString, prevenirInyeccionCodigo, catchAsync, response, ClientError, validNumber } = require('../utils/indexUtils')

const postCrearGames = async (req, res) => {
    // doble comprobación, primero por seguridad en el frontend nos aseguraremos que los datos enviados sean correctos,
    // y aquí (backend) volveremos ha hacer una doble comprobación para evitar injección de código
    if(!!req.body.name && !validDataString(req.body.name)) throw new ClientError("El nombre no es correcto", 400);
    if(!!req.body.category && !validDataString(req.body.category)) throw new ClientError("La categoria no es correcta", 400);
    if(!!req.body.author && !validDataString(req.body.author)) throw new ClientError("El autor no es correcto", 400);
    if(!!req.body.publisher && !validDataString(req.body.publisher)) throw new ClientError("La editorial no es correcta", 400);
    if(!!req.body.numberOfPlayers && !validNumber(req.body.numberOfPlayers)) throw new ClientError("El numero de jugadores no es correcto", 400);
    if(!!req.body.recommendedAge && !validNumber(req.body.recommendedAge))throw new ClientError("La edad recomendada no es correcto", 400);
    if(!!req.body.duration && !validDataString(req.body.duration)) throw new ClientError("La duracion no es correcta", 400);
    if(!!req.body.description && !validDataString(req.body.description))throw new ClientError("La descripcion no es correcta", 400);

    // Crear un nuevo Games
    //utilizando el modelo de Mongoose
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
    // Guardar el games en la base de datos
    const savedGame = await newGame.save();
    // Enviar el games guardado como respuesta
    response(res, 200, savedGame)
}


//recoge todos los games
const getGames= async (req,res)=>{
    // Utiliza el método find() de Mongoose para obtener todos los documentos en la colección
    const games = await Games.find();
    // Responde con la lista de games y código de estado 200 (OK)
    response(res, 200, games);
}

//busca un games por ID
const getGamesID= async (req,res)=>{
    // Obtén el ID del parámetro de la solicitud
    const id = req.params.id;
    // Utiliza el método findById() de Mongoose para buscar un games por su ID
    // Si no se encuentra el games, responde con un código de estado 404 (Not Found)
    const games = await Games.findById(id).catch(error => {throw new ClientError('games no encontrado', 404)});
    // Responde con el games encontrado y código de estado 200 (OK)
    response(res, 200, games);
}

// borrar un games
const gamesDeleteId=async (req, res)=>{
    const id = req.params.id;
    const GamesDelete = await Games.deleteOne({_id:id});
    response(res, 200, GamesDelete);
}

// modificar el games
const gamesPut=async (req, res)=>{
    const filter = { _id: req.body.id};
    const updateText={};
    if(!!req.body.name)updateText['name']=prevenirInyeccionCodigo(req.body.name); 
    if(!!req.body.category)updateText['category']=prevenirInyeccionCodigo(req.body.category);
    if(!!req.body.author) updateText['author']=prevenirInyeccionCodigo(req.body.author);
    if(!!req.body.publisher) updateText['publisher']=prevenirInyeccionCodigo(req.body.publisher);
    if(!!req.body.numberOfPlayers && validNumber(req.body.numberOfPlayers)){
        updateText['numberOfPlayers']=prevenirInyeccionCodigo(req.body.numberOfPlayers);
    } else {
        throw new ClientError('Dato incorrecto: numero de jugadores', 400)
    }
    if(!!req.body.recommendedAge && validNumber(req.body.recommendedAge)){
        updateText['recommendedAge']=prevenirInyeccionCodigo(req.body.recommendedAge);
    } else {
        throw new ClientError('Dato incorrecto: edad recomendada', 400)
    }
    if(!!req.body.duration && validNumber(req.body.duration)){ 
        updateText['duration']=prevenirInyeccionCodigo(req.body.duration)
    } else {
        throw new ClientError('Dato incorrecto: duracion', 400)
    };
    if(!!req.body.description) updateText['description']=prevenirInyeccionCodigo(req.body.description);
    let doc = await Games.findOneAndUpdate(filter, updateText);

    response(res, 200, doc);
}


module.exports = {
    //gestiono los errores con catchAsync
    postCrearGames:catchAsync(postCrearGames),
    getGames:catchAsync(getGames),
    getGamesID:catchAsync(getGamesID),
    gamesDeleteId:catchAsync(gamesDeleteId),
    gamesPut:catchAsync(gamesPut)
}