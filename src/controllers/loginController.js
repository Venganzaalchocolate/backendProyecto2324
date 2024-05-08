const {User} = require('../models/indexModels');
const {catchAsync, response, ClientError, comprobarPass, generarToken} = require('../utils/indexUtils')

//comprueba un usuario
const login= async (req,res)=>{
    const emailAux=req.body.email
    const passAux=req.body.pass
    // Utiliza el método findOne() de Mongoose para obtener 1 usuario
    const usuario = await User.findOne({ email: emailAux});
    if(usuario == null) throw new ClientError("El nombre no es correcto", 403);
    if (!await comprobarPass(passAux, usuario.pass)) throw new ClientError("La contraseña no es correcta", 403);
    const token = await generarToken(usuario)
    // Responde con la lista de usuario + el token generado y código de estado 200 (OK)
    const respuesta={usuario,token}
    response(res, 200, respuesta);
}



module.exports = {
    //gestiono los errores con catchAsync
    login:catchAsync(login)
}