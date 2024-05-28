// emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail', // Utiliza el servicio de correo que prefieras (Gmail, Outlook, etc.)
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.EMAIL_PASS}`
  }
});



const sendOrderConfirmationEmail = (to, orderDetails) => {
    //AL INTENTAR IMPLEMENTARLO NO HE PODIDO PORQUE GOOGLE A REFORZADO SU SEGURIDAD, TENDRÍA QUE USAR GOOGLE CLOUD QUE ES DE PAGO, ASÍ QUE SOLO LO SIMULARÉ
//   const mailOptions = {
//     from: `${process.env.EMAIL}`,
//     to: to,
//     subject: 'Confirmación de Pedido',
//     text: `Gracias por tu pedido. Aquí están los detalles: ${orderDetails}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {

//     if (error) {
//       return console.log(error);
//     }
//     console.log('Email enviado: ' + info.response);
//   });
    return true
};

module.exports = { sendOrderConfirmationEmail };
