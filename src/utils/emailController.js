const {Resend} = require('resend');


const resend = new Resend(`${process.env.EMAIL}`);
//comprueba un usuario
const sendEmail= async (to, from, subject, message)=>{
    const resp=await resend.emails.send({
    from: 'onborading@resend.dev',
    to: 'mesamagicatienda@gmail.com',
    subject: subject,
    html: `<div>
        <p>To: ${message.to}</p>
        <p>From: ${message.from}</p>
        <p>Name: ${message.name}</p>
        <p>Subject: ${message.subject}</p>
        <p>Message: ${message.message}</p>
    </div>`
    });
    return resp
}



module.exports={
    sendEmail
  };
