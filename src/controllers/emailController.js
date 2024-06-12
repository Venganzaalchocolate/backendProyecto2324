
const {catchAsync, response, ClientError, comprobarPass, generarToken, verificarToken, sendEmail} = require('../utils/indexUtils')

//comprueba un usuario
const enviarEmail= async (req,res)=>{
    const name=req.body.name
    const from=req.body.from
    const to=req.body.to
    const subject=req.body.subject
    const message=req.body.message
    const messageAux={
        name:name,
        from:from,
        to:to,
        subject:subject,
        message:message
    }

    const respuesta=await sendEmail(to, from, subject, messageAux)
    if(respuesta.error==null)response(res, 200, respuesta);
    else throw new ClientError('No se ha podido enviar el email', 500);
}



module.exports = {
    //gestiono los errores con catchAsync
    enviarEmail:catchAsync(enviarEmail)
}