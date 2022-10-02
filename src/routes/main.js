const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async(req, res) =>{
    const { name, email, phone, message } =req.body;

    contentHTML=`
        <h1>Información Usuario</h1>
        <p>Nombre: ${name} </p>
        <p>Correo: ${email} </p>
        <p>Telefono: ${phone} </p>
        <p>Mensaje: ${message} </p>
    `;

    const trasnport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        secure: false,
        auth: {
            user: '7dae0867d81473',
            pass: '91f9d580cf1619'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await trasnport.sendMail({
        from: "'Contacto Portafolio' <portafolio@gmail.com>",
        to: 'lugapemu98@gmail.com',
        subject: 'Contacto por formulario',
        html: contentHTML
    });

    console.log('Llegó un correo',info.mesaggeId);

    res.send('<script>alert("Tu mensaje a sido enviado"); window.location.href = "/index.html"; </script>');
});

module.exports = router;