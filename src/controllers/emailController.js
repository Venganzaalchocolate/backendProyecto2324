
const { sendOrderConfirmationEmail } = require('../utils/emailService')
const {catchAsync, response, ClientError, comprobarPass, generarToken, verificarToken} = require('../utils/indexUtils')

//comprueba un usuario
const sendEmail= async (req, res, next)=>{
    //AL INTENTAR IMPLEMENTARLO NO HE PODIDO PORQUE GOOGLE A REFORZADO SU SEGURIDAD, TENDRÍA QUE USAR GOOGLE CLOUD QUE ES DE PAGO, ASÍ QUE SOLO LO SIMULARÉ
    const to=req.body.to;
    const order=req.body.order;
    const resp=sendOrderConfirmationEmail(to,order)
    if(resp) response(res, 200, {message:'ok'})
    else throw ClientError('No se ha podido enviar el email', 500)
}




module.exports = {
    sendEmail:catchAsync(sendEmail)
}