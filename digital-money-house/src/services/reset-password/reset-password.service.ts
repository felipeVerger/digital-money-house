import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

async function sendPasswordResetEmail(email: string, resetToken: string) {
  const msg = {
    to: email,
    from: 'your_email_address',
    subject: 'Restablecimiento de contraseña',
    html: `
      <p>Hola,</p>
      <p>Recibimos una solicitud para restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
      <a href="https://your_app_url/reset-password?token=${resetToken}">Restablecer contraseña</a>
      <p>Si no solicitaste restablecer tu contraseña, ignora este correo electrónico.</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Correo electrónico enviado');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw new Error('Error al enviar el correo electrónico');
  }
}

export default sendPasswordResetEmail;
