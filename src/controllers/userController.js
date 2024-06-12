const {User} = require('../models/indexModels');
const {resError, prevenirInyeccionCodigo, esPassSegura, validName, validEmail, catchAsync, response, generarHashpass, ClientError, sendEmail } = require('../utils/indexUtils');

// crear usuario
const postCrearUsuario = async (req, res) => {
    // doble comprobación, primero por seguridad en el frontend nos aseguraremos que los datos enviados sean correctos,
    // y aquí (backend) volveremos ha hacer una doble comprobación para evitar injección de código

    if (!req.body.nombre || !req.body.email || !req.body.password || !req.body.direccion ||
        !validEmail(req.body.email) ||
        !validName(req.body.nombre) ||
        !esPassSegura(req.body.password)
    ) throw new ClientError("Los datos no son correctos", 400);
    // Crear un nuevo usuario utilizando el modelo de Mongoose
    //const newUser = new User(req.body);
    // genero una password segura
    const passSegura=generarHashpass(req.body.password);
    const newUser=new User({
        name: prevenirInyeccionCodigo(req.body.nombre),
        email: prevenirInyeccionCodigo(req.body.email),
        pass: await passSegura,
        direction: prevenirInyeccionCodigo(req.body.direccion),
    })
    // Guardar el usuario en la base de datos
    const savedUser = await newUser.save();
    /*to, from, subject, messageAux*/
    const messageAux={
        name:req.body.nombre,
        from:'mesamagicatienda@gmail.com',
        to:req.body.email,
        subject:"Gracias por unirte a MesaMágica",
        message:"Tu cuenta se ha creado con éxito"
    }
    await sendEmail(messageAux.to, messageAux.from, messageAux.subject, messageAux)
    // Enviar el usuario guardado como respuesta
    response(res, 200, savedUser)
}

//recoge todos los usuarios
const getUsers= async (req,res)=>{
    // Utiliza el método find() de Mongoose para obtener todos los documentos en la colección
    const usuarios = await User.find();
    // Responde con la lista de usuarios y código de estado 200 (OK)
    response(res, 200, usuarios);
}

const getUsersFilter= async (req,res)=>{
    const filter = {name: {$regex: `.*${req.body.name}.*`}}
    // Utiliza el método find() de Mongoose para obtener todos los documentos en la colección
    const usuarios = await User.find(filter);
    // Responde con la lista de usuarios y código de estado 200 (OK)
    response(res, 200, usuarios);
}


//busca un usuario por ID
const getUserID= async (req,res)=>{
    // Obtén el ID del parámetro de la solicitud
    const id = req.params.id;
    // Utiliza el método findById() de Mongoose para buscar un usuario por su ID
    // Si no se encuentra el usuario, responde con un código de estado 404 (Not Found)
    const usuario = await User.findById(id).catch(error => {throw new ClientError('Usuario no encontrado', 404)});
    // Responde con el usuario encontrado y código de estado 200 (OK)
    response(res, 200, usuario);
}

// borrar un usuario
const UserDeleteId=async (req, res)=>{
    const id = req.params.id;
    const userDelete = await User.deleteOne({_id:id});
    response(res, 200, userDelete);
}

// modificar el usuario
const userPut=async (req, res)=>{
    const filter = { _id: req.body.id};
    const updateText={};
    if(req.body.nombre!=null) updateText['name']=prevenirInyeccionCodigo(req.body.nombre);
    if(req.body.email!=null) updateText['email']=prevenirInyeccionCodigo(req.body.email);
    if(req.body.direccion!=null) updateText['direction']=prevenirInyeccionCodigo(req.body.direccion);
    if(req.body.password!=null && esPassSegura(req.body.password) ) updateText['pass']=await generarHashpass(req.body.password);
    if(req.body.role!=null && (req.body.role=='normal' || req.body.role=='admin')) updateText['role']=req.body.role;
    let doc = await User.findOneAndUpdate(filter, updateText);
    if(doc!=null)doc= await User.findById(req.body.id)
    else throw new ClientError("No existe el usuario", 400)
    response(res, 200, doc);
}

module.exports = {
    //gestiono los errores con catchAsync
    postCrearUsuario:catchAsync(postCrearUsuario),
    getUsers:catchAsync(getUsers),
    getUserID:catchAsync(getUserID),
    UserDeleteId:catchAsync(UserDeleteId),
    userPut:catchAsync(userPut),
    getUsersFilter:catchAsync(getUsersFilter)
}
