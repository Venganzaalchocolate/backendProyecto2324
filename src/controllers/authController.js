const {User} = require('../models/indexModels');
const {catchAsync, response, ClientError, comprobarPass, generarToken, verificarToken} = require('../utils/indexUtils')

//comprueba un usuario
const tokenValid= async (req, res, next)=>{
    const token=req.headers.authorization.split(' ').pop()
    const verificacion=await verificarToken(token)
    if(verificacion==null){
       res.status(409).send({error:true, message: "El token no es valido"})
    }
    next();
}

const tokenValidAdmin=async (req, res, next)=>{
    const token=req.headers.authorization.split(' ').pop()
    const verificacion=await verificarToken(token)
    if(verificacion==null) res.status(409).send({error:true, message: "El token no es valido"})
    if(verificacion.role && verificacion.role=='admin') next();
    else res.status(409).send({error:true, message: "El usuario no está autorizado"})
}



module.exports = {
    //gestiono los errores con catchAsync
    tokenValid,
    tokenValidAdmin
}